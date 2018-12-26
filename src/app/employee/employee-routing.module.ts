import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeeComponent } from './list-employee.component';

const routes: Routes = [
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'edit/:id', component: CreateEmployeeComponent },
  { path: 'employeelist', component: ListEmployeeComponent },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class EmployeeRoutingModule { }
