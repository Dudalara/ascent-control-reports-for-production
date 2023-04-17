import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderProjectComponent } from './header-project/header-project.component';
import { FooterProjectComponent } from './footer-project/footer-project.component';
import { FormComponent } from './form/form.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportingInformationComponent } from './reporting-information/reporting-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderProjectComponent,
    FooterProjectComponent,
    FormComponent,
    ButtonsComponent,
    CreateReportComponent,
    LoginComponent,
    DashboardComponent,
    ReportingInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
