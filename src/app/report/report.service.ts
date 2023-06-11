import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Report } from '../model/report';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private URL = 'http://localhost:3000/reports';

  reports!: Report[];
  public items: any[] = [];
  constructor(private http: HttpClient) {
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

  saveInHttp(report: any) {
    const min = 10;
    const max = 500;
    report.id =  Math.floor(Math.random() * (max - min + 1) + min);
    return this.http.post(this.URL, report);
  }

}