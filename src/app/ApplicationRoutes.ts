

import {Routes} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { HomeComponentComponent } from './home-component/home-component.component';

export const routes: Routes = [
    { path: '',redirectTo:'Home',pathMatch:'full' },
    { path: 'Home',component:HomeComponentComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'Department', component: DepartmentComponent },
    
    { path: '**', component: HomeComponentComponent }
    
   ]
