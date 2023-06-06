import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instance } from '../model/instance';

@Injectable({
  providedIn: 'root',
})
export class InstancePromiseService {
  
  URL = 'http://localhost:3000/instances';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  /*getDataFromJSON(def: () => Promise<Instance[]>) {
    return this.httpClient.get<Instance[]>(this.URL).toPromise();
  }*/

  getInstances(): Promise<Instance[]> {
    return this.httpClient.get<Instance[]>(`${this.URL}`)
      .toPromise()
      .then((instances: Instance[] | undefined) => instances || []);
  }
}