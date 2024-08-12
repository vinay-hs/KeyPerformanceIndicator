import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllDataDhr } from '../model/allData.model';
import { DhrVerticalKpi } from '../model/dhrVerticalKpiReport.model';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  

  constructor(private http: HttpClient) { }

  private employees: Employee[] = [
    { employeeId: 1, firstName: 'John', lastName: 'Doe', contactNumber: '1234567890', emailAddress: 'john@example.com' },
    { employeeId: 2, firstName: 'Jane', lastName: 'Smith', contactNumber: '9876543210', emailAddress: 'jane@example.com' },
    // Add more employees here
    ];
    
    getEmployees(): Employee[] {
    return this.employees;
    }

    getAllEmployee(): Observable<Employee[]>{
      return this.http.get<Employee[]>('http://localhost:2008/all/dhr');
    }

    postDhrReport(dhrVertcalKpi: DhrVerticalKpi): Observable<DhrVerticalKpi> {
      return this.http.post<DhrVerticalKpi>('http://localhost:2008/add/mappingData/dhrVerticalKpi', dhrVertcalKpi);
    }

    getAllData(vertical: string, employee: string): Observable<AllDataDhr> {
      return this.http.get<AllDataDhr>('http://localhost:2008/get/all/dhrVertical/kpi/'+ vertical + '/' + employee );
    }
}
