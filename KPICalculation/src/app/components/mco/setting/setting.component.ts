import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {

  dropdowns = [
    { label: 'Role wise KPI weightage', showForm: false },
    { label: 'KPI wise source of actual performance', showForm: false },
    { label: 'Role wise bonus plan', showForm: false },
    { label: 'Maximum payout by role', showForm: false }
  ];

 

  toggleForm(dropdown: any) {
    dropdown.showForm=!dropdown.showForm;
  }
}
