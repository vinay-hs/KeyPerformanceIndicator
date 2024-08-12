import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import * as Papa from 'papaparse';
import { Vertical } from '../model/vertical.model';
import { GoalVertical } from '../model/GoalVertical.model';
@Injectable({
  providedIn: 'root'
})
export class VerticalService {

  private csvUrl = '../../../assets/csv/vertical.csv'
  constructor(private http: HttpClient) { }

    getCsvData(): Observable<any>{
      return this.http.get(this.csvUrl, {responseType: 'text'});
    }
 
    getVertical(): Observable<Vertical[]>{
      return this.http.get<Vertical[]>('http://localhost:2008/get/vertical')
    }

    getVerticalGoalByVerticalId(verticalId: string): Observable<GoalVertical[]>{
      return this.http.get<GoalVertical[]>('http://localhost:2008/get/goalVertical/Vertical/' + verticalId);
    }
    getVerticalById(id: string): Observable<Vertical>{
      return this.http.get<Vertical>('http://localhost:2008/get/verticalById/' + id);
    }

}
