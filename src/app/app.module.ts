import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderProjectComponent } from './header-project/header-project.component';
import { FooterProjectComponent } from './footer-project/footer-project.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportingInformationComponent } from './reporting-information/reporting-information.component';
import { ReportComponent } from './report/report.component';
import { HttpClientModule } from '@angular/common/http';
import { InstanceComponent } from './instance/instance.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderProjectComponent,
    FooterProjectComponent,
    CreateReportComponent,
    LoginComponent,
    DashboardComponent,
    ReportingInformationComponent,
    ReportComponent,
    InstanceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
