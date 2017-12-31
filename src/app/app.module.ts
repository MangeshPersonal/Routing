import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';

import {routes} from './ApplicationRoutes'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule
   ,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}

