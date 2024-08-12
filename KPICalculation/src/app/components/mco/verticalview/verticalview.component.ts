import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GoalVertical } from 'src/app/model/GoalVertical.model';
import { Vertical } from 'src/app/model/vertical.model';
import { VerticalService } from 'src/app/service/vertical.service';

@Component({
  selector: 'app-verticalview',
  templateUrl: './verticalview.component.html',
  styleUrls: ['./verticalview.component.css']
})
export class VerticalviewComponent implements OnInit{

  verticals: string[];
  verticalData: Vertical[];
  dropdownForm: FormGroup;
  filteredData = [];
  selectedVertical='';
  goalVertical: GoalVertical[];
  vertical: Vertical;
  constructor(private verticalService: VerticalService, private formBuilder: FormBuilder){
    this.dropdownForm = this.formBuilder.group({
      selectedVertical: ''
    });
  }
  showEmployeePopup = false;

  openEmployeePopup() {
    this.showEmployeePopup = true;
  }

  closeEmployeePopup(){
    this.showEmployeePopup = false;
  }

  isPopupOpen = false;
  openPopup(event: Event): void{
    event.preventDefault();
    this.isPopupOpen = true;
  }

  ngOnInit() {
    this.fetchCsvData();

    this.verticalService.getVertical().subscribe({
      next: (data)=>{
        this.verticalData = data;
      }
    })
    this.dropdownForm = this.formBuilder.group({
      vertical: [''] // Set the initial value as empty
    });

    this.dropdownForm.controls['vertical'].valueChanges.subscribe((value) => {
      this.filterData(value);
    });
    this.verticalService.getVerticalGoalByVerticalId(this.selectedVertical).subscribe(data =>{
      this.goalVertical = data
    });
    this.verticalService.getVerticalById(this.selectedVertical).subscribe(data =>{
      this.vertical = data
    });
  }

  filterData(vertical: string) {
    // Reset the filtered data array
    this.filteredData = [];

    // Filter the data based on the selected vertical name
    if (vertical) {
      this.filteredData = this.verticalData.filter((item) => item.verticalName === vertical);
      console.log(this.filterData);
    } else {
      this.filteredData = this.verticalData;
      console.log(this.filterData);
    }
    console.log(this.filterData);
  }

  fetchCsvData() {
    this.verticalService.getCsvData().subscribe(data => {
      const lines = data.split('\n');
      const headers = lines[0].split(',');

      this.verticals = lines
        .slice(1)
        .filter(line => line)
        .map(line => {
          const values = line.split(',');
          return values[1];
        });
    });
  }

  verticalSelect(value: string): void{
    this.selectedVertical = value;
    console.log(this.selectedVertical);
    this.verticalService.getVerticalGoalByVerticalId(this.selectedVertical).subscribe(data =>{
      this.goalVertical = data
    });
    console.log(this.goalVertical);
    
    this.verticalService.getVerticalById(this.selectedVertical).subscribe(data =>{
      this.vertical = data
    });
    console.log(this.vertical.verticalName);
    
  }
}
