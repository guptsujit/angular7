import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomPreloadingService} from './custom-preloading.service';
const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'employees',data : {preload :true},loadChildren: './employee/employee.module#EmployeeModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadingService})],
  exports : [RouterModule]
})
export class AppRoutingModule { }
