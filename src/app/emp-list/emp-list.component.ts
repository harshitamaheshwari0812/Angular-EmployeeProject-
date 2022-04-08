import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Employee:any[]=[
    {fname:"Arohi",lname:"Atal",gender:"female",salary:30000,hiredate:"12-09-2018"},
    {fname:"Arun",lname:"Verma",gender:"male",salary:40000,hiredate:"10-10-2001"},
    {fname:"Seema",lname:"Sharma",gender:"female",salary:15000,hiredate:"1-08-2010"},
    {fname:"Smith",lname:"jhon",gender:"male",salary:10000,hiredate:"11-12-2008"},
    {fname:"Ivan",lname:" Bay",gender:"male",salary:20000,hiredate:"30-01-2017"} ]

    getTotalEmp(){
      return this.Employee.length}
    getTotalMaleEmp(){
      return this.Employee
      .filter(e=>e.gender=='male').length
    }
    getTotalFemaleEmp(){
      return this.Employee.
      filter(e=>e.gender=='female').length
    }
    radiobtnvalue:string='all'
    OnRadioButtonChanged(radiovalue:string){
        this.radiobtnvalue=radiovalue
    }









}

