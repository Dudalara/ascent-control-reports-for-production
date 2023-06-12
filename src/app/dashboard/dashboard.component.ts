import { Component, OnInit, ViewChild } from '@angular/core';
import { Report } from '../model/report';
import { ReportPromiseService } from '../services/report-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
   
  reports: Report[] = [];

  constructor(
    private reportPromiseService: ReportPromiseService
    ) {}

  ngOnInit(): void {
    this.reportPromiseService.getReports().then((reports: Report[]) => {
      this.reports = reports;
      console.log(reports);
    })
    .catch((error: any) => {
      console.error('Erro ao obter relatórios:', error);
    });
  }

}
