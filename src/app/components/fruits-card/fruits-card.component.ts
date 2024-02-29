import { Component, Input, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/service/fruits.service';
import { Fruit } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-fruits-card',
  templateUrl: './fruits-card.component.html',
  styleUrls: ['./fruits-card.component.scss'],
})
export class FruitsCardComponent implements OnInit {

  @Input() fruit: Fruit | undefined;

  showInfo: boolean = false;

  constructor(private fruitsService: FruitsService) { }

  ngOnInit() {}

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }

  removeItem(event: Event) {
    event.stopPropagation();
    this.fruitsService.removeAmount()
    this.fruit && this.fruit.amount > 0 ? this.fruit.amount-- : null;
  }
  
  addItem(event: Event) {
    event.stopPropagation();
    this.fruitsService.addAmount()
    this.fruit ? this.fruit.amount++ : null; 
  }

}

