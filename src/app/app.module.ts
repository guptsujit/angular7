import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeModule } from './employee/employee.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DisplayEmployeeComponent } from './employee/display-employee.component';
import {EmployeeListComponent} from './employee/employee-list.component';
import { SortableColumnComponent } from './grid/sortable-column.component';
import { SortableTableDirective } from './grid/sortable-table.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, 
          } from "@angular/material";
import { 
	IgxGridModule,
	IgxExcelExporterService
 } from "igniteui-angular";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DisplayEmployeeComponent,
    EmployeeListComponent,
    SortableColumnComponent,
    SortableTableDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EmployeeModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    IgxGridModule,
  ],
  providers: [IgxExcelExporterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
