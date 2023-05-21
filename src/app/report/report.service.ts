import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Report } from '../model/report';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  reports!: Report[];
  constructor() {
    this.reports = WebStorageUtil.get(Constants.REPORTS_KEY);
  }

  save(report: Report) {
    this.reports = WebStorageUtil.get(Constants.REPORTS_KEY);
    this.reports.push(report);
    WebStorageUtil.set(Constants.REPORTS_KEY, this.reports);
  }

  getReports(): Report[] {
    this.reports = WebStorageUtil.get(Constants.REPORTS_KEY);
    return this.reports;
  }
}