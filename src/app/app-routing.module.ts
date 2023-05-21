import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportingInformationComponent } from './reporting-information/reporting-information.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent,
  },
  {
    path:'new-report', component: ReportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
