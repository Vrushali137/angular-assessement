import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  employee = {
    name: '',
    salary: '',
    age: ''
  };

  constructor(private employeeService: EmployeeService) { }

  addEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe((res:any) => {
      console.log('Employee created successfully',res);
    });
  }

  editEmployee(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(data => {
      this.employee = data.data;
    });
  }
  
  updateEmployee(): void {
    // this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
    //   console.log('Employee updated successfully');
    // });
  }
  
}
