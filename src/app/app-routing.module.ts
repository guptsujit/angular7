


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CustomGridComponent } from './examples/custom-grid/custom-grid.component';

const routes: Routes = [
  { path : 'customgrid',component: CustomGridComponent },
  { path: '', redirectTo: '/customgrid', pathMatch: 'full' },
  { path: '**', redirectTo: '/customgrid', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule, TranslateModule],
})
export class AppRoutingRoutingModule { }
