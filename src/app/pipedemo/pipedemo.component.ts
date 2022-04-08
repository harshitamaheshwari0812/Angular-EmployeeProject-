import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  searchvalue:string=''
  Employee:any[]=[
    {fname:"Arohi",lname:"Atal",gender:"female",salary:30000,hiredate:"12-09-2018"},
    {fname:"Arun",lname:"Verma",gender:"Male",salary:40000,hiredate:"10-10-2001"},
    {fname:"Seema",lname:"Sharma",gender:"femAle",salary:15000,hiredate:"1-08-2010"},
    {fname:"Smith",lname:"jhon",gender:"male",salary:10000,hiredate:"11-12-2008"},
    {fname:"Ivan",lname:" Bay",gender:"male",salary:20000,hiredate:"01-30-2017"} ]
  constructor() { }

  ngOnInit(): void {
  }

}
