import { Component, Input, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/service/fruits.service';
import { Fruit } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent  implements OnInit {

  @Input() fruit: Fruit | undefined;

  showInfo: boolean = false;

  constructor(private fruitsService: FruitsService) { }

  ngOnInit() {}

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }

  removeItem() {
    
    this.fruit && this.fruit.amount > 0 ? this.fruit.amount-- : null;
    this.fruitsService.removeAmount()
  }
  
  addItem() {
    
    this.fruit ? this.fruit.amount++ : null; 
    this.fruitsService.addAmount()
  }

}
