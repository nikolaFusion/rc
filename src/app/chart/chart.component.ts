import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { ChartOptions } from 'chart.js';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeHoursModel } from '../models/employee-hours-model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  emplyeeList = new Array<EmployeeHoursModel>();
  ngUnsubscribe: Subject<any> = new Subject<any>();
  loadTable = false;
  public legendPosition: LegendPosition = LegendPosition.Below;

  data: Object[] = [];
  legend: Object;

  chartLabel: Object;

  public chartOptions: Partial<ChartOptions>;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService
      .GetEmployees()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((d) => {
        this.emplyeeList = d;

        this.setChartDate(this.emplyeeList);
      });
  }
  private setChartDate(emplyeeList: EmployeeHoursModel[]): void {
    var count = 0;
    emplyeeList.forEach((x) => {
      count = count + x.hours;
    });
    emplyeeList.forEach((x) => {
      this.data.push(
        new Object({
          name: x.name,
          value: x.hours,
          text: Math.floor((x.hours / count) * 100).toString() + '%',
        })
      );
    });
    this.chartLabel = {
      visible: true,
      position: 'Inside',
      name: 'text',
    };
    this.legend = {
      visible: true,
      position: 'Bottom',
      height: '8%',
      width: '100%',
    };
    this.loadTable = true;
  }
}
