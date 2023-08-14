import { Component } from '@angular/core';
import { CubeEmployee } from './models/cube-employee';
import { CubeEmployeeService } from './services/cube-employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CubeEmployeeMgt.UI';
  employees: CubeEmployee[] = []; // Object that displayed in the application
  employeeToEdit?: CubeEmployee; // Object that represents an employee that is being currently edited (optional)

  constructor(private cubeEmployeeService: CubeEmployeeService) {}
  ngOnInit() : void {
    this.cubeEmployeeService
    .getEmployees().subscribe((result: CubeEmployee[]) => (this.employees = result));
  }

  updateEmployeeList(employees: CubeEmployee[]){
    this.employees = employees;
  }

  //Calling when new employee is added to the list
  initNewEmployee() {
    this.employeeToEdit = new CubeEmployee();
  }

  editEmployee(employee: CubeEmployee){
    this.employeeToEdit = employee;
  }
}
