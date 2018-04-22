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

  jobCategories = ["technology", "social", "sciences", "doctor"];
  newEmployee: Employee;
  submitted = false;

  constructor() { 
    

  }

  ngOnInit() {
    
    // this.id = 1;
    this.name = "Hoang";
    this.dateOfBirth = new Date();
    this.alias = 'Hoa';
    this.jobCategory = this.jobCategories[0];

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
  }

}
