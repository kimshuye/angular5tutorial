import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  id;
  name;
  dateOfBirth;
  alias;//optional
  jobCategory; //optional. Eg: technology, social, sciences, doctor 

  jobCategories = [
    {value: 'technology', viewValue: 'Technology'},
    {value: 'social', viewValue: 'Social'},
    {value: 'sciences', viewValue: 'Sciences'},
    {value: 'doctor', viewValue: 'Doctor'}
  ];
  
  newEmployee: Employee;  
  submitted = false;

  newEmpTemp  = {    
    name : '',
    dateOfBirth : new Date(),
    alias:'',
    jobCategory:''
  };

  constructor() {  }

  ngOnInit() {
    
    // this.id = 1;
    this.name = "Hoang";
    this.dateOfBirth = new Date();
    this.alias = 'Hoa';
    this.jobCategory = this.jobCategories[0].value;
    

  }

  onSubmit() { 
    this.submitted = true; 
  }

  addNewEmployee() {
    
    // this.newEmployee.id = this.id;
    let newEmp = {
      name : this.name,
      dateOfBirth : new Date(this.dateOfBirth),
      alias : this.alias,//optional
      jobCategory : this.jobCategory //optional. Eg: technology, social, sciences, doctor 
    }


    console.log("newEmp : ");
    console.log(newEmp);

    // console.log("newEmpTemp : ");
    // console.log(this.newEmpTemp);
  }

}
