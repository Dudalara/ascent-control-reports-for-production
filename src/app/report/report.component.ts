import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { Report } from '../model/report';
import { Instance } from '../model/instance';
import { ReportService } from './report.service';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { InstancePromiseService } from '../services/instance-promise.serice';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{
  @ViewChild('form') form!: NgForm;

  report!: Report;
  reports?: Report[];
  instances: Instance[] = [];


  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private userService: ReportService,
    private instancePromiseService: InstancePromiseService
    ) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.report = new Report();
    this.reports = this.userService.getReports();
    this.instancePromiseService.getInstances().then((instances: Instance[]) => {
      this.instances = instances;
    })
    .catch((error: any) => {
      console.error('Erro ao obter instâncias:', error);
    });
  }

  onSubmit() {
    this.isSubmitted = true;
      this.userService.save(this.report);
    
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.report = new Report();
    this.reports = this.userService.getReports();
  }
}
