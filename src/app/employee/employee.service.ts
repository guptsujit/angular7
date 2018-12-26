import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IEmployee} from "./iemployee";
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
   
  },
   {
    id : 2,
    firstname : "kedar",
    lastname : "kumar",
    contactpreference : "phone",
    email : "kedar.kumar@iris.com",
    phone : 9752883424,
  
  },
   {
    id : 3,
    firstname : "Preeti",
    lastname : "vats",
    contactpreference : "phone",
    email : "kedar.kumar@iris.com",
    phone : 9752883424,
    
  },
   {
    id : 4,
    firstname : "Yogesh",
    lastname : "kumar",
    contactpreference : "phone",
    email : "kedar.kumar@iris.com",
    phone : 9752883424,
    
  },{
    id : 5,
    firstname : "Sujit1",
    lastname : "gupta",
    contactpreference : "email",
    email : "sujit.kumar@iris.com",
    phone : 9752883424,
    
  },
   {
    id : 6,
    firstname : "kedar1",
    lastname : "kumar",
    contactpreference : "phone",
    email : "kedar.kumar@iris.com",
    phone : 9752883424,
    
  },
   {
    id : 7,
    firstname : "Preeti1",
    lastname : "vats",
    contactpreference : "phone",
    email : "kedar.kumar@iris.com",
    phone : 9752883424,
    
  },
   {
    id : 8,
    firstname : "Yogesh1",
    lastname : "kumar",
    contactpreference : "phone",
    email : "kedar.kumar@iris.com",
    phone : 9752883424,
   
  }
 ]
  constructor() { }
  /**
   * Function to get employee list
   * 
   * return observable of IEmployee 
   */
   getEmployees() : Observable<IEmployee[]>{
   return of<IEmployee[]>(this.employeelist);
  }
}
