import { Component, OnInit } from '@angular/core';
import {IEmployee} from "./iemployee";
import {EmployeeService} from "./employee.service";
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
   employees : IEmployee[]
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.getEmployeeList();
  }
 getEmployeeList(){
  this._employeeService.getEmployees().subscribe((data)=>{
   this.employees = data;
  })
 }

}
