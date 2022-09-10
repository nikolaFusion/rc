import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SalaryDataModel } from 'src/app/models/salary-model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.employeeApiUrl;
  }

  public GetEmployees(): Observable<SalaryDataModel[]> {
    return this.http.get<SalaryDataModel[]>(`${this.baseUrl}`);
  }
}
