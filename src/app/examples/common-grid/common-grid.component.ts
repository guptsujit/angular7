import { Component, OnInit,Input } from '@angular/core';
import {
  AngularGridInstance,
  Column,
  DelimiterType,
  FieldType,
  FileType,
  Filters,
  Formatter,
  Formatters,
  Statistic,
  GridOdataService,
  GridOption
} from './../../modules/angular-slickgrid';
import { HttpClient } from '@angular/common/http';

const defaultPageSize = 20;
const sampleDataRoot = 'assets/data';

@Component({
  selector: 'common-grid',
  templateUrl: './common-grid.component.html',
  styleUrls: ['./common-grid.component.scss']
})
export class CommonGridComponent implements OnInit {

  statistics: Statistic;

  odataQuery = '';
  processing = true;
  status = { text: 'processing...', class: 'alert alert-danger' };
  angularGrid: AngularGridInstance;
  @Input('GridColumns')
  columnDefinitions: Column[];
  _gridOptions: GridOption;
  @Input('GridData')
  dataset: any[];
  @Input() filteredConfig:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {

    // let defaultPageSize=5;
    this._gridOptions = {
      enableFiltering: this.filteredConfig.enableFiltering,
      enableAutoResize: false,
      enableSorting: this.filteredConfig.enableSorting,
      enableHeaderMenu:false,
      enableGridMenu:false,
      // exportWithFormatter: true
      enableExport:true,
      gridMenu: {
            hideExportCsvCommand: false,           // false by default, so it's optional
            hideExportTextDelimitedCommand: true  // true by default, so if you want it, you will need to disable the flag
          },
       enablePagination:true,
       enableCheckboxSelector: true,
       enableRowSelection: true,
       pagination: {
         pageSizes: [10, 15, 20, 25, 30, 40, 50, 75, 100],
         pageSize: defaultPageSize,
         totalItems: 0
       },
      //  backendServiceApi: {
      //    service: new GridOdataService(),
      //    preProcess: () => this.displaySpinner(true),
      //    process: (query) => this.getCustomerApiCall(query),
      //    postProcess: (response) => {
      //      this.statistics = response.statistics;
      //      this.displaySpinner(false);
      //      this.getCustomerCallback(response);
      //    }
      //  }
    };

    if(this.filteredConfig.Paging){
      this._gridOptions.backendServiceApi= {
        service: new GridOdataService(),
        preProcess: () => this.displaySpinner(true),
        process: (query) => this.getCustomerApiCall(query),
        postProcess: (response) => {
          this.statistics = response.statistics;
          this.displaySpinner(false);
          this.getCustomerCallback(response);
        }
      }
    }
  }

  getCustomerCallback(data) {
    // totalItems property needs to be filled for pagination to work correctly
    // however we need to force Angular to do a dirty check, doing a clone object will do just that
    this._gridOptions.pagination.totalItems = data['totalRecordCount'];
    if (this.statistics) {
      this.statistics.totalItemCount = data['totalRecordCount'];
    }
    this._gridOptions = Object.assign({}, this._gridOptions);

    // once pagination totalItems is filled, we can update the dataset
    this.dataset = data['items'];
    this.odataQuery = data['query'];
  }

  getCustomerApiCall(query) {
    return this.getCustomerDataApiMock(query);
  }

  displaySpinner(isProcessing) {
    this.processing = isProcessing;
    this.status = (isProcessing)
      ? { text: 'processing...', class: 'alert alert-danger' }
      : { text: 'done', class: 'alert alert-success' };
  }

  angularGridReady(angularGrid: any) {
    this.angularGrid = angularGrid;
  }

  exportToExcel(type) {
    this.angularGrid.exportService.exportToFile({
      delimiter:  DelimiterType.comma,
      filename: 'myExport',
      format:  FileType.xls
    });
  }

  getCustomerDataApiMock(query) {
    // the mock is returning a Promise, just like a WebAPI typically does
    return new Promise((resolve, reject) => {
      const queryParams = query.toLowerCase().split('&');
      let top: number;
      let skip = 0;
      let orderBy = '';
      let countTotalItems = 100;
      const columnFilters = {};

      for (const param of queryParams) {
        if (param.includes('$top=')) {
          top = +(param.substring('$top='.length));
        }
        if (param.includes('$skip=')) {
          skip = +(param.substring('$skip='.length));
        }
        if (param.includes('$orderby=')) {
          orderBy = param.substring('$orderby='.length);
        }
        if (param.includes('$filter=')) {
          const filterBy = param.substring('$filter='.length).replace('%20', ' ');
          if (filterBy.includes('substringof')) {
            const filterMatch = filterBy.match(/substringof\('(.*?)',([a-zA-Z ]*)/);
            const fieldName = filterMatch[2].trim();
            columnFilters[fieldName] = {
              type: 'substring',
              term: filterMatch[1].trim()
            };
          }
          if (filterBy.includes('eq')) {
            const filterMatch = filterBy.match(/([a-zA-Z ]*) eq '(.*?)'/);
            const fieldName = filterMatch[1].trim();
            columnFilters[fieldName] = {
              type: 'equal',
              term: filterMatch[2].trim()
            };
          }
          if (filterBy.includes('startswith')) {
            const filterMatch = filterBy.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/);
            const fieldName = filterMatch[1].trim();
            columnFilters[fieldName] = {
              type: 'starts',
              term: filterMatch[2].trim()
            };
          }
          if (filterBy.includes('endswith')) {
            const filterMatch = filterBy.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/);
            const fieldName = filterMatch[1].trim();
            columnFilters[fieldName] = {
              type: 'ends',
              term: filterMatch[2].trim()
            };
          }
        }
      }

      const sort = orderBy.includes('asc')
        ? 'ASC'
        : orderBy.includes('desc')
          ? 'DESC'
          : '';

      let url;
      switch (sort) {
        case 'ASC':
          url = `${sampleDataRoot}/customers_100_ASC.json`;
          break;
        case 'DESC':
          url = `${sampleDataRoot}/customers_100_DESC.json`;
          break;
        default:
          url = `${sampleDataRoot}/customers_100.json`;
          break;
      }

      this.http.get(url).subscribe(data => {
        const dataArray = <any[]> data;

        // Read the result field from the JSON response.
        const firstRow = skip;
        let filteredData = dataArray;
        if (columnFilters) {
          for (const columnId in columnFilters) {
            if (columnFilters.hasOwnProperty(columnId)) {
              filteredData = filteredData.filter(column => {
                const filterType = columnFilters[columnId].type;
                const searchTerm = columnFilters[columnId].term;
                let colId = columnId;
                if (columnId && columnId.indexOf(' ') !== -1) {
                  const splitIds = columnId.split(' ');
                  colId = splitIds[splitIds.length - 1];
                }
                const filterTerm = column[colId];
                if (filterTerm) {
                  switch (filterType) {
                    case 'equal': return filterTerm.toLowerCase() === searchTerm;
                    case 'ends': return filterTerm.toLowerCase().endsWith(searchTerm);
                    case 'starts': return filterTerm.toLowerCase().startsWith(searchTerm);
                    case 'substring': return filterTerm.toLowerCase().includes(searchTerm);
                  }
                }
              });
            }
          }
          countTotalItems = filteredData.length;
        }
        const updatedData = filteredData.slice(firstRow, firstRow + top);

        setTimeout(() => {
          resolve({ items: updatedData, totalRecordCount: countTotalItems, query });
        }, 500);
      });
    });
  }

}
