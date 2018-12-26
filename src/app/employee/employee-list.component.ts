import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from "./iemployee";
import { EmployeeService } from "./employee.service";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[]

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeeList();

  }
  /**
   * Function to get empployee list
   */
  getEmployeeList() {
    this._employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    })
  }



}
