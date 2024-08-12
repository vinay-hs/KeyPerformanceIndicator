import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/signin/signin.component';

import { McoComponent } from './components/mco/mco.component';
import { DashboardComponent } from './components/mco/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { VerticalviewComponent } from './components/mco/verticalview/verticalview.component';
import { AddemployeeComponent } from './components/mco/addemployee/addemployee.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EmployeelistComponent } from './components/mco/employeelist/employeelist.component';
import { CreateverticalComponent } from './components/mco/createvertical/createvertical.component';
import { AssignkpiComponent } from './components/mco/assignkpi/assignkpi.component';
import { DemoComponent } from './components/demo/demo.component';
import { CreatekpiComponent } from './components/mco/createkpi/createkpi.component';
import { GenerateReportComponent } from './components/mco/generate-report/generate-report.component';
import { GeneratedataComponent } from './components/mco/generatedata/generatedata.component';
import { SettingComponent } from './components/mco/setting/setting.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    DashboardComponent,
    McoComponent,
    VerticalviewComponent,
    AddemployeeComponent,
    EmployeelistComponent,
    CreateverticalComponent,
    AssignkpiComponent,
    DemoComponent,
    CreatekpiComponent,
    GenerateReportComponent,
    GeneratedataComponent,
    SettingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    NgxChartsModule,
    CanvasJSAngularChartsModule,
    NgSelectModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
