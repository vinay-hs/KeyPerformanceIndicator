import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart  } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

verticalData: { vertical: string; KPI1: number; KPI2: number; KPI3: number; KPI4: number; KPI5: number;  }[] = [
  { vertical: 'BFS', KPI1: 50, KPI2: 10, KPI3: 5 , KPI4: 15 , KPI5: 10 },
  { vertical: 'HCI', KPI1: 30, KPI2: 20, KPI3: 15 , KPI4: 15 , KPI5: 20},
  { vertical: 'HTPS', KPI1: 45, KPI2: 30, KPI3: 5 , KPI4: 10 , KPI5: 10},
  { vertical: 'GTT', KPI1: 20, KPI2: 10, KPI3: 20 , KPI4: 30 , KPI5: 20},
  { vertical: 'M&C', KPI1: 20, KPI2: 40, KPI3: 20 , KPI4: 10 , KPI5: 10},
  { vertical: 'BFS', KPI1: 30, KPI2: 20, KPI3: 30 , KPI4: 10 , KPI5: 10},
  ];
  
  currentVerticalIndex: number = 0;
currentVertical: { vertical: string; KPI1: number; KPI2: number; KPI3: number,  KPI4: number; KPI5: number; };

  view: number[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Vertical';
  showYAxisLabel = true;
  yAxisLabel = 'Percentage';
  showDataLabel = true;
  barPadding = 40;
  
  constructor() {}
  
  ngOnInit(): void {
    this.currentVertical = this.verticalData[0];
    }

    nextVertical(): void {
      this.currentVerticalIndex++;
      if (this.currentVerticalIndex >= this.verticalData.length) {
      this.currentVerticalIndex = 0;
      }
      this.currentVertical = this.verticalData[this.currentVerticalIndex];
      }
  
  }

