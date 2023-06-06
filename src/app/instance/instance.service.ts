import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstanceService {
  URL = 'http://localhost:3000/instances'; // URL do servidor JSON

  constructor(private http: HttpClient) { }

  save(instance: any) {
    const min = 10;
    const max = 500;
    instance.id =  Math.floor(Math.random() * (max - min + 1) + min);
    return this.http.post(this.URL, instance);
  }
}