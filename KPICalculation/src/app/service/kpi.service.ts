import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import * as Papa from 'papaparse';
import { Kpi } from '../model/kpi.model';

@Injectable({
  providedIn: 'root'
})
export class KpiService {


  private csvUrl = '../../../assets/csv/KPI data.csv';

  constructor(private http: HttpClient) { }

  getKpiData(): Observable<any[]>{
    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map(csvData => {
        const parsedData = Papa.parse(csvData, { header: true}).data;
        return parsedData;
      })
    )
  }

  getAllKpi(): Observable<Kpi[]>{
    return this.http.get<Kpi[]>('http://localhost:2008/all/kpi')
  }

}
