import { Input,Component } from '@angular/core';

@Component({
  selector: 'app-reporting-information',
  templateUrl: './reporting-information.component.html',
  styleUrls: ['./reporting-information.component.css']
})
export class ReportingInformationComponent {
  @Input() instanceName: string; 
  @Input() updateDate: Date; 
  @Input() author: string; 
  @Input() id: number;

}
