import { NgModule } from '@angular/core';
import { EmployeeRoutingModule} from './employee-routing.module';

import {CreateEmployeeComponent} from './create-employee.component';
import { ListEmployeeComponent } from './list-employee.component';
import { DisplayEmployeeComponent } from './display-employee.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import {EmployeeService} from './employee.service';
@NgModule({
  declarations: [CreateEmployeeComponent, ListEmployeeComponent, DisplayEmployeeComponent],
  imports: [
    HttpClientModule,
    EmployeeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers : [EmployeeService],
  exports:[]
})
export class EmployeeModule { }
