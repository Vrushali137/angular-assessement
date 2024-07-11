import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      console.log("response",data);
      
      this.employees = data.data;
    });
  }

  editEmployee(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(data => {
      console.log(data);
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe((response) => {
      console.log("deleted",response);
      
      this.fetchEmployees();
    });
  }
}
