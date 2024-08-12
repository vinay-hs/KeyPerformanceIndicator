import { Component } from '@angular/core';
import { AllDataDhr } from 'src/app/model/allData.model';
// import { DhrVerticalKpi } from 'src/app/model/dhrVerticalKpiReport.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-generatedata',
  templateUrl: './generatedata.component.html',
  styleUrls: ['./generatedata.component.css']
})
export class GeneratedataComponent {

  allData: AllDataDhr;
  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    let vertical = localStorage.getItem('vertical');
    let employee = localStorage.getItem('employee');

    console.log(vertical);
    console.log(employee);

    this.employeeService.getAllData(vertical, employee).subscribe(data =>{
      this.allData = data
      console.log(this.allData);
    });
    console.log(this.allData);
    
    
  }
}
