import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SortService } from '../grid/sort.service';
import {
  IgxExcelExporterOptions,
  IgxExcelExporterService,
} from "igniteui-angular";
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

  constructor(private sortService: SortService, private excelExportService: IgxExcelExporterService) { }
  // Receive data by parent component ie through list employee component
  @Input() employeeList;
  // Define required pagination property
  showFirstLastButtons: boolean = true;
  pageSize: number = 3;
  pageIndex: number = 0;
  dataSource: any;
  totalSize: number;
  start: number = 0;
  end: number = 3;
  /**
   * Get all data and display data per page as defined by user
   *  
   */
  ngOnInit() {
    const part = this.employeeList.slice(0, this.pageSize);
    this.dataSource = part;
  }
  /**
   * Function to sort data on the page
   * 
   * @param event 
   */
  onSorted(event) {
    this.dataSource.sort(this.sortService.compareValues(event.sortColumn, event.sortDirection));
  }
  /**
   * Function to handle pagination when user clicks on next button
 
   * @param e 
   */
  handlePage(e: any) {
    this.end = (e.pageIndex + 1) * this.pageSize;
    this.start = e.pageIndex * this.pageSize;
    const part = this.employeeList.slice(this.start, this.end);
    this.dataSource = part;
  }
  /**
   * Function to export data in excel
   */
  exportButtonHandler() {
    this.excelExportService.exportData(this.employeeList, new IgxExcelExporterOptions("employee_list"));
  }
}
