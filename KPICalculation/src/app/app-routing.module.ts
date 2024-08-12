import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { AssignkpiComponent } from './components/mco/assignkpi/assignkpi.component';
import { CreatekpiComponent } from './components/mco/createkpi/createkpi.component';
import { CreateverticalComponent } from './components/mco/createvertical/createvertical.component';
import { DashboardComponent } from './components/mco/dashboard/dashboard.component';
import { EmployeelistComponent } from './components/mco/employeelist/employeelist.component';
import { GenerateReportComponent } from './components/mco/generate-report/generate-report.component';
import { GeneratedataComponent } from './components/mco/generatedata/generatedata.component';

import { McoComponent } from './components/mco/mco.component';
import { ProfileComponent } from './components/mco/profile/profile.component';
import { SettingComponent } from './components/mco/setting/setting.component';
import { VerticalviewComponent } from './components/mco/verticalview/verticalview.component';

import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path:'', component: SigninComponent },
  
  { path:'mco', component:McoComponent, children:[
    { path:'dashboard', component:DashboardComponent  },
    { path:'vericalview', component:VerticalviewComponent },
    { path:'employeelist', component:EmployeelistComponent },
    { path:'createvertical', component:CreateverticalComponent },
    { path:'assignkpi', component:AssignkpiComponent },
    { path:'profile', component: ProfileComponent },
    { path:'createkpi', component: CreatekpiComponent },
    { path:'generatereport', component: GenerateReportComponent },
    { path:'generatedata', component: GeneratedataComponent },
    { path:'setting', component: SettingComponent }
  ]  },
  { path:'demo', component: DemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
