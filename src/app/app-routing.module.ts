import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportingInformationComponent } from './reporting-information/reporting-information.component';
import { ReportComponent } from './report/report.component';
import { InstanceComponent } from './instance/instance.component';
import { HomeComponent } from './home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
