import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from '../model/report';

@Injectable({
  providedIn: 'root',
})
export class ReportPromiseService {
  
  URL = 'http://localhost:3000/reports';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getReports(): Promise<Report[]> {
    return this.httpClient.get<Report[]>(`${this.URL}`)
      .toPromise()
      .then((reports: Report[] | undefined) => reports || []);
  }

  getReportById(id: number): Promise<Report | undefined> {
    return this.httpClient.get<Report>(`${this.URL}/${id}`)
      .toPromise()
      .then((report: Report | undefined) => report || undefined);
  }


}