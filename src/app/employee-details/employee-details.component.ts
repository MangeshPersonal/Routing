import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
    empid:string ;
    name :string  
  constructor(private activeroute : ActivatedRoute) {
this.activeroute.params.subscribe(params=>this.empid=params.empid);

   }
ngOnInit() {
  }

}
