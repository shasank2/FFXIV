import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {

  @Input() item : any

  constructor() { }
  
  ngOnInit(): void {
  }
}
