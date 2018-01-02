

import {Routes} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    { path: '',redirectTo:'Home',pathMatch:'full' },
    { path: 'Home',component:HomeComponentComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'Department', component: DepartmentComponent },
    { path: 'employee/:empid', component: EmployeeDetailsComponent },
    { path: 'employee/:empid / :name', component: EmployeeDetailsComponent },
    { path: '**', component: HomeComponentComponent },
 
   ]
