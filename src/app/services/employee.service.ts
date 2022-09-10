import { EmployeeModel } from './../models/employee-model';
import { EmployeeApiService } from './Api-services/employee-api.service';
import { map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { SalaryDataModel } from '../models/salary-model';
import { EmployeeHoursModel } from '../models/employee-hours-model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private employeeApiService: EmployeeApiService) {}

  private OrderEmployeeByHours(
    employees: Array<SalaryDataModel>
  ): Array<EmployeeHoursModel> {
    let empleyeeMap = new EmployeeModel();
    empleyeeMap.employee = new Map<string, number>();
    employees.forEach((item) => {
      if (!empleyeeMap.employee.has(item.EmployeeName)) {
        empleyeeMap.employee.set(
          item.EmployeeName,
          this.numberOfHours(item.StarTimeUtc, item.EndTimeUtc)
        );
      } else {
        empleyeeMap.employee.set(
          item.EmployeeName,
          empleyeeMap.employee.get(item.EmployeeName) +
            this.numberOfHours(item.StarTimeUtc, item.EndTimeUtc)
        );
      }
    });

    var orederList = this.sortMap(empleyeeMap);

    return orederList;
  }

  sortMap(empleyeeMap: EmployeeModel): Array<EmployeeHoursModel> {
    let employeeHoursList = new Array<EmployeeHoursModel>();
    empleyeeMap.employee.forEach((value: number, key: string) => {
      if (key != null) {
        employeeHoursList.push(new EmployeeHoursModel(key, value));
      }
    });

    employeeHoursList.sort((n1, n2) => {
      if (n1.hours < n2.hours) {
        return 1;
      }

      if (n1.hours > n2.hours) {
        return -1;
      }

      return 0;
    });

    return employeeHoursList;
  }

  numberOfHours(StarTimeUtc: Date, EndTimeUtc: Date): number {
    var result =
      (new Date(EndTimeUtc).getTime() - new Date(StarTimeUtc).getTime()) /
      3600000;
    return result;
  }

  public GetEmployees(): Observable<Array<EmployeeHoursModel>> {
    return this.employeeApiService.GetEmployees().pipe(
      map((data) => {
        return this.OrderEmployeeByHours(data);
      })
    );
  }
}
