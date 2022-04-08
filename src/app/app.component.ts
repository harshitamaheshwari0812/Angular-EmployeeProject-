import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  templateUrl: './app.component.html',
  // template:`<h2>Hello from Template</h2>
  //           dghfjgh
  //           fghfghkjfh
  //           fgnkjfhgjkfhgk<br>
  //           <h1>
  //           {{title}}`,
  styleUrls: ['./app.component.css']
    // styles:['h1{color:red}']
})
export class AppComponent {
  title:string = 'Employee Details';
  fname:string="Ram";
  lname:string="Sharma";
  gender:string="male";
  salary:number=200000;
  cols:number=2;
  displaydiv:boolean=true;
  colors:string[]=["red","green","blue","yellow"]


  









}
