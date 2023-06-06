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
    const min = 10;
    const max = 500;
    console.log(this.instance.name);
    this.instance.id =  Math.floor(Math.random() * (max - min + 1) + min);
     this.instanceService.save(this.instance)
      .subscribe(
        (response: any) => {
          console.log('Entidade cadastrada com sucesso:', this.instance);
        },
        (error: any) => {
          console.error('Erro ao cadastrar entidade:', error);
        }
      );
  }
}
