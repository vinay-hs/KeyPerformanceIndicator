import { Component, OnInit } from '@angular/core';
import { KpiService } from 'src/app/service/kpi.service';

@Component({
  selector: 'app-createvertical',
  templateUrl: './createvertical.component.html',
  styleUrls: ['./createvertical.component.css']
})
export class CreateverticalComponent implements OnInit{
  kpiData: any[];

  constructor(private kpiService: KpiService){ }
  ngOnInit(): void {
    this.kpiService.getKpiData().subscribe(data => {
      this.kpiData = data;
    })
  }

}
