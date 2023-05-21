import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   reports = [
    {
      "instanceName": "teste 1",
      "updateDate":new Date('2023-01-03'),
      "createdBy": "fulano",
    },
    {
      "instanceName": "teste 2",
      "updateDate":new Date('2023-02-11'),
      "createdBy": "ciclano",
    }, 
    {
      "instanceName": "teste 3",
      "updateDate":new Date('2023-04-10'),
      "createdBy": "beltrano",
    },   
  ]

}
