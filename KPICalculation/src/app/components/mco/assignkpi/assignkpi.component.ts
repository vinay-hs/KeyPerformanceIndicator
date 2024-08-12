import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DhrVerticalKpi } from 'src/app/model/dhrVerticalKpiReport.model';
import { Employee } from 'src/app/model/employee.model';
import { Kpi } from 'src/app/model/kpi.model';
import { Message } from 'src/app/model/message.model';
import { Vertical } from 'src/app/model/vertical.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { KpiService } from 'src/app/service/kpi.service';
import { VerticalService } from 'src/app/service/vertical.service';

@Component({
  selector: 'app-assignkpi',
  templateUrl: './assignkpi.component.html',
  styleUrls: ['./assignkpi.component.css']
  
})
export class AssignkpiComponent {

  wizardForm: FormGroup;
  currentStep = 1;

  employeeArray: Employee[];
  kpiArray: Kpi[];
  verticalArray: Vertical[];
  dhrVertcalKpi: DhrVerticalKpi;
  msg: Message;

  kpiForm: UntypedFormGroup;
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService,
    private kpiService: KpiService, private verticalService: VerticalService) { }

  ngOnInit() {
    this.wizardForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });

    this.employeeService.getAllEmployee().subscribe(data =>{
      this.employeeArray = data;
    });
    this.kpiService.getAllKpi().subscribe(data =>{
      this.kpiArray = data;
    });
    this.verticalService.getVertical().subscribe(data =>{
      this.verticalArray = data;
    })
    this.wizardForm = new UntypedFormGroup({
      vertical: new UntypedFormControl('', Validators.required),
      kpi: new UntypedFormControl('', Validators.required),
      role: new UntypedFormControl('', Validators.required),
      employee: new UntypedFormControl('', Validators.required),
      weightage: new UntypedFormControl('', Validators.required),
      target: new UntypedFormControl('', Validators.required),
      period: new UntypedFormControl('', Validators.required)
    });
    // console.log(this.wizardForm.value.vertical.id);
    
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  onFormSubmit(){
    this.dhrVertcalKpi={
      verticalId: this.wizardForm.value.vertical,
      kpiId: this.wizardForm.value.kpi,
      role: this.wizardForm.value.role,
      employeeId: this.wizardForm.value.employee,
      weightage: this.wizardForm.value.weightage,
      target: this.wizardForm.value.target,
      period: this.wizardForm.value.period,
    }
    console.log(this.dhrVertcalKpi);
    this.employeeService.postDhrReport(this.dhrVertcalKpi).subscribe(data =>{
      this.dhrVertcalKpi = data;
    });
  }
}
