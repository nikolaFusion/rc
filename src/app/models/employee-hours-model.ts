export class EmployeeHoursModel {
  name: string;
  hours: number;

  constructor(name: string, hours: number) {
    this.hours = hours;
    this.name = name;
  }
}
