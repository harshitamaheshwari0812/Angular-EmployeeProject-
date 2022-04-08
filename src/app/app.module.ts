import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { CustomdirectiveDirective } from './customdirective.directive';
import { AssignmentComponent } from './assignment/assignment.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpCountComponent } from './emp-count/emp-count.component';
import { TrvdemoComponent } from './trvdemo/trvdemo.component';
import { ParentlifecycleComponent } from './parentlifecycle/parentlifecycle.component';
import { ChildlifecycleComponent } from './childlifecycle/childlifecycle.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { TitlePipe } from './title.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    CustomdirectiveDirective,
    AssignmentComponent,
    EmpListComponent,
    EmpCountComponent,
    TrvdemoComponent,
    ParentlifecycleComponent,
    ChildlifecycleComponent,
    PipedemoComponent,
    TitlePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
