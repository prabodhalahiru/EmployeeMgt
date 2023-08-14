import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CubeEmployee } from 'src/app/models/cube-employee';
import { CubeEmployeeService } from 'src/app/services/cube-employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee?: CubeEmployee;
  @Output() employeesUpdated = new EventEmitter<CubeEmployee[]>();

  constructor(private cubeEmployeeService: CubeEmployeeService){}

  ngOnInit(): void {
      
  }

  updateEmployee(employee:CubeEmployee){
    this.cubeEmployeeService
    .updateEmployee(employee)
    .subscribe((employees: CubeEmployee[]) => this.employeesUpdated.emit(employees));
  }

  deleteEmployee(employee:CubeEmployee){
    this.cubeEmployeeService
    .deleteEmployee(employee)
    .subscribe((employees: CubeEmployee[]) => this.employeesUpdated.emit(employees));
  }

  createEmployee(employee:CubeEmployee){
    this.cubeEmployeeService
    .createEmployee(employee)
    .subscribe((employees: CubeEmployee[]) => this.employeesUpdated.emit(employees));
  }

}
