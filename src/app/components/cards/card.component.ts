import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  photo:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  id:string="0"

  constructor() { }

  ngOnInit(): void {

  }
}
