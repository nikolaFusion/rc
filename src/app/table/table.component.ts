import { EmployeeHoursModel } from './../models/employee-hours-model';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  emplyeeList = new Array<EmployeeHoursModel>();
  ngUnsubscribe: Subject<any> = new Subject<any>();
  loadTable = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService
      .GetEmployees()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((d) => {
        this.emplyeeList = d;
        this.loadTable = true;
      });
  }
}
