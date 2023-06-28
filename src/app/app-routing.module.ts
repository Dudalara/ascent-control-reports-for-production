import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { InstanceComponent } from './instance/instance.component';
import { HomeComponent } from './home/home.component';
import { ReportIndividualViewComponent } from './report-individual-view/report-individual-view.component';
import { ReportingInformationComponent } from './reporting-information/reporting-information.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent,
  },
  {
    path:'new-report', component: ReportComponent,
  },
  {
    path:'new-instance', component: InstanceComponent,
  },
  {
    path:'', component: HomeComponent,
  },
  {
    path:'report/:id', component: ReportIndividualViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
