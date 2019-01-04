import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {
  AngularGridInstance,
  Column,
  DelimiterType,
  FieldType,
  FileType,
  Filters,
  Formatter,
  Formatters,
  GridOption
} from './../../modules/angular-slickgrid';
// import { CollectionOption } from 'dist/public_api';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss','../../slickgrid-custom-variables.scss'],
  encapsulation : ViewEncapsulation.None
})
export class CustomGridComponent implements OnInit {

  columnDefinitions:Column[]=[];
  gridOptions: GridOption={};
  dataset: any[]=[];
  Sorting:boolean=true;
  Filtering:boolean=true;
  ExcelDownlaod:boolean=true;
  filteredConfig:any={};
  Load:boolean=false;
  Paging:boolean=true;
  subTitle="This Component is to create specific filtered slickgrid." 
  

  ngOnInit() {
  }

  DefineColumn(){
    this.columnDefinitions=[
      { id: 'name', name: 'Name', field: 'name', sortable: true, type: FieldType.string,
        filterable: true,
        filter: {
          model: Filters.inputText
        }
      },
      { id: 'gender', name: 'Gender', field: 'gender', filterable: true, sortable: true,
      // filter: {
      //   model: Filters.inputText
      // }
        filter: {
          model: Filters.singleSelect,
          collection: [ { value: '', label: '' }, { value: 'male', label: 'male' }, { value: 'female', label: 'female' } ]
        }
      },
      { id: 'company', name: 'Company', field: 'company',sortable :true,type: FieldType.string,
      filterable: true,
        filter: {
          model: Filters.inputText
        }
    
    
       }
    ];

  }

  FilterChanged(){
    this.Load=false;
    console.log(this.filteredConfig);

  }
  loadData() {
    console.log(this.filteredConfig);
    
    this.dataset = [];

    this.DefineColumn();
    
    this.filteredConfig={
      enableSorting:this.Sorting,
      enableFiltering:this.Filtering,
      enableExcelDownlaod:this.ExcelDownlaod,
      columnDefinitions:this.columnDefinitions,
      dataset:this.dataset,
      Paging:this.Paging
    }
    this.Load=true;

  }



}
