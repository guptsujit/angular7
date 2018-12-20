import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';
import {EmployeeService} from './employee.service';
import {ActivatedRoute,Router} from '@angular/router';
import {IEmployee} from "./iemployee";
import {ISkill} from "./iskill";
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  formErrors = {

  }
  constructor(private fb: FormBuilder,private _activateRoute : ActivatedRoute,
  private _employeeService : EmployeeService,private _router :Router) { }

  ngOnInit() {
    this.buildForm();
    this.employeeForm.get('contactpreference').valueChanges.subscribe((value) => {
      this.onContactPreferenceChange(value);

    })
    this.employeeForm.valueChanges.subscribe((data) => {
      this.validateForm();
    })
   

   //call edit employee
   this._activateRoute.paramMap.subscribe((param)=>{
     let id = +param.get('id');
     if(id){
       this.editEmployee(id);
     }
   })

  }

  buildForm() {
    this.employeeForm = this.fb.group({
      id : [0],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required]],
      contactpreference: ['email'],
      emailGroup: this.fb.group({
        email: ['', [Validators.required,Validators.email, ValidationService.emailDomain("iris.com")]],
        confirmEmail: ['', [Validators.required]],
      }, { validators: ValidationService.matchEmail }),
      phone: ['', []],
      skills: this.fb.array([
        this.addSkills()
      ])
    })
  }

  addSkills(): FormGroup {
    return this.fb.group({
      skill: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      profiency: ['', [Validators.required]],
    })
  }
  addMoreSkills() {
   (<FormArray>this.employeeForm.get('skills')).push(this.addSkills());
  }
  validateForm(formgroup: FormGroup = this.employeeForm): void {   
    Object.keys(formgroup.controls).forEach((key: string) => {
      let abstractControl = formgroup.get(key);
      this.formErrors[key] = '';
      if (abstractControl.invalid && (abstractControl.touched || abstractControl.dirty || abstractControl.value!='')) {
        for (const errorkey in abstractControl.errors) {
          if (errorkey) {
            this.formErrors[key] = ValidationService.getValidatorErrorMessage(errorkey);
          }
        }


      }
      if (abstractControl instanceof FormGroup) {
        this.validateForm(abstractControl);
      }
      if (abstractControl instanceof FormArray) {
        for (const controls of abstractControl.controls) {
          if (controls instanceof FormGroup) {
            this.validateForm(controls);
          }
        }
      }
    });
    // console.log(abstractControl.errors);
  }
  onContactPreferenceChange(selectedValue: string) {

    if (selectedValue === 'phone') {
      this.employeeForm.get('phone').setValidators([Validators.required]);
    } else {
      this.employeeForm.get('phone').clearValidators();
    }
    this.employeeForm.get('phone').updateValueAndValidity();
  }
  removeSkills(index:number){
   (<FormArray>this.employeeForm.get('skills')).removeAt(index);
  }

  editEmployee(id:number){
   let data  = this._employeeService.getEmployee(id);
    this.employeeForm.patchValue({
      id : data.id,
      firstname : data.firstname,
      lastname: data.lastname,
      contactpreference : data.contactpreference,
      emailGroup : {email : data.email,confirmEmail :data.email},
      phone : data.phone
    });

    //populate data in formArray
    this.employeeForm.setControl('skills',this.setExistingEmployeeSkill(data.skills))
  }
  setExistingEmployeeSkill(skillset : ISkill[]) : FormArray{
      const formArray = new FormArray([]);
      skillset.forEach((s)=>{
        formArray.push(this.fb.group({
         skill : [s.skill,Validators.required],
         experience : [s.experience,Validators.required],
         profiency : [s.profiency,Validators.required]  
        }))
       
      })

     // formArray.markAsDirty();
      //formArray.markAsDirty();

      return formArray;
  }
  processFormData(){ 
    this.employeeForm.value.email = this.employeeForm.value.emailGroup.email;
    delete this.employeeForm.value.emailGroup;
      console.log(this.employeeForm.value);
     console.log(this.employeeForm.valid);
    if(this.employeeForm.valid){
      if(this.employeeForm.value.id){
        this._employeeService.updateEmployee();
      }else{
       this._employeeService.saveEmployee(this.employeeForm.value);
       this._router.navigate(['/employeelist']);
      }
    }
 
  }
}
