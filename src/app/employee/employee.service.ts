import { Injectable } from '@angular/core';
import {IEmployee} from "./iemployee";
import {Observable,of} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 employeelist:IEmployee[] = [
  {
    id : 1,
    firstname : "Sujit",
    lastname : "gupta",
    contactpreference : "email",
    email : "sujit.kumar@iris.com",
    phone : 9752883424,
    skills : [{skill : "Angular",experience : "2 years",profiency : "expert"},{skill : "Javascript",experience : "5 years",profiency : "expert"}]
  },
   {
    id : 2,
    firstname : "kedar",
    lastname : "kumar",
    contactpreference : "phone",
    email : "kedar.kumar@iris.com",
    phone : 9752883424,
    skills : [{skill : "Java",experience : "6 years",profiency : "expert"}]
  }
 ]
  constructor(private _httpclient :HttpClient ) { }

  getEmployees() : Observable<IEmployee[]>{
   return of<IEmployee[]>(this.employeelist);
  }
  getEmployee(id:number){
   return this.employeelist.find((employee) => employee.id===id);  

  }
  saveEmployee(employee:IEmployee){
    this.employeelist.push(employee);
    return true;
  }
  updateEmployee(){

  }
}
