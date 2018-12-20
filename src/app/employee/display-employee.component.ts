import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  @Input() employeeList
  editEmployee(id: number) {
    this._router.navigate(['/edit', id])
  }

}
