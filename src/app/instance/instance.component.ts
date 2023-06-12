import { Component, ViewChild} from '@angular/core';
import { InstanceService } from './instance.service';
import { NgForm } from '@angular/forms';
import { Instance } from '../model/instance';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})

export class InstanceComponent {
  @ViewChild('form') form!: NgForm;
  instance:  Instance;
  instances?: Instance[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private instanceService: InstanceService) { }

  ngOnInit(): void { 
    this.instance = new Instance();
   
  }

  onSubmit() {
  
     this.instanceService.save(this.instance)
      .subscribe(
        (response: any) => {
          console.log('Instância cadastrada com sucesso:', response);
        },
        (error: any) => {
          console.error('Erro ao cadastrar entidade:', error);
        }
      );
  }
}
