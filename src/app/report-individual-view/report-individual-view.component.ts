import { Component, OnInit } from '@angular/core';
import { ReportPromiseService } from '../services/report-service.service';
import { ActivatedRoute } from '@angular/router';
import { Report } from '../model/report';

@Component({
  selector: 'app-report-individual-view',
  templateUrl: './report-individual-view.component.html',
  styleUrls: ['./report-individual-view.component.css']
})
export class ReportIndividualViewComponent implements OnInit {

  report: Report | undefined;
  id: number;

  constructor(
    private reportPromiseService: ReportPromiseService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; 
  
      this.reportPromiseService.getReportById(this.id).then((report: Report | undefined) => {
        this.report = report;
        console.log(report?.updatedSet);
      }).catch((error: any) => {
        console.error('Erro ao obter relatórios:', error);
      });;
    });
  }

}
