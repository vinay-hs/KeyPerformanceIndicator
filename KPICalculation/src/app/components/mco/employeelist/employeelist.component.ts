import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

  @Input() showPopup =false;
  @Output() closePopup = new EventEmitter<void>();
  employees: Employee[] = [];

constructor(private employeeService: EmployeeService) { }

ngOnInit(): void {
this.employees = this.employeeService.getEmployees();
}
onClose(): void{
  this.closePopup.emit();
}
}
