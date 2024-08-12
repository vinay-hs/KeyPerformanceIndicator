import { Component } from '@angular/core';
import { FormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DhrVerticalKpi } from 'src/app/model/dhrVerticalKpiReport.model';
import { Employee } from 'src/app/model/employee.model';
import { Vertical } from 'src/app/model/vertical.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { VerticalService } from 'src/app/service/vertical.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent {

  employeearray: Employee[];
  verticalArray: Vertical[];
  reportForm: UntypedFormGroup;
  dhrVertcalKpi: DhrVerticalKpi;
  constructor(private employeeService: EmployeeService, private verticalService: VerticalService){}

  ngOnInit(){
    this.employeeService.getAllEmployee().subscribe(data =>{
      this.employeearray = data;
    });
    this.verticalService.getVertical().subscribe(data =>{
      this.verticalArray = data;
    })
    this.reportForm = new UntypedFormGroup({
      vertical: new UntypedFormControl('', Validators.required),
      employee:new UntypedFormControl('', Validators.required),
    })
    console.log(this.reportForm.value.vertical);
   console.log(this.reportForm.value.employee);
  }

  onFormSubmit(){
    this.dhrVertcalKpi={
      verticalId: this.reportForm.value.vertical,
      employeeId: this.reportForm.value.employee
    }
    localStorage.setItem('vertical', this.reportForm.value.vertical);
    localStorage.setItem('employee',this.reportForm.value.employee);
   console.log(this.reportForm.value.vertical);
   console.log(this.reportForm.value.employee);
   
   
  }
}
