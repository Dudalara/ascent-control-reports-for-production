import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportingInformationComponent } from './reporting-information/reporting-information.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent,
   children:[
    {
      path:'reporting-information', component: ReportingInformationComponent,
    } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
