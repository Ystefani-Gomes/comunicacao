import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interno',
  standalone: true,
  imports: [],
  templateUrl: './interno.component.html',
  styleUrl: './interno.component.scss'
})
export class InternoComponent {
 @Input() versaoUrna! : string;

contra: number = 0;
aFavor: number = 0;

votar(voto:boolean){
  if(voto){
    this.aFavor++;
  }else{
    this.contra++;
  }
}
}

