import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}
}
