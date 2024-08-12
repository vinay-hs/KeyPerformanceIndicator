import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  // chartData = [
  //   {
  //   name: 'Category 1',
  //   value: 25
  //   },
  //   {
  //   name: 'Category 2',
  //   value: 50
  //   },
  //   {
  //   name: 'Category 3',
  //   value: 75
  //   },
  //   {
  //   name: 'Category 4',
  //   value: 100
  //   }
  //   ];
  //   labelX(data: any): number {
  //     const radius = 150;
  //     const angle = (data.startAngle + data.endAngle) / 2;
  //     return 150 + radius * Math.sin(angle);
  //   }
  
  //   labelY(data: any): number {
  //     const radius = 150;
  //     const angle = (data.startAngle + data.endAngle) / 2;
  //     return 150 - radius * Math.cos(angle);
  //   }
  
  //   onSelect(event: any) {
  //     // Handle the select event here
  //     console.log(event);
  //   }



  chartData = [
    { label: 'Slice 1', percentage: 20 },
    { label: 'Slice 2', percentage: 10 },
    { label: 'Slice 3', percentage: 15 },
    // Add more data as needed
  ];

  getSliceStyles(index: number) {
    const rotation = this.getSliceRotation(index);
    return {
      transform: `rotate(${rotation}deg)`,
      'background-color': this.chartData[index]
    };
  }

  private getSliceRotation(index: number) {
    let rotation = 0;
    for (let i = 0; i < index; i++) {
      rotation += this.chartData[i].percentage * 3.6; // Each slice occupies 3.6 degrees
    }
    return rotation;
  }
};

