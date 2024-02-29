import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/service/fruits.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent  implements OnInit {

  fruitsData: any[] = []; 
  totalAmount: number = 0;

  constructor(private fruitsService: FruitsService) { }

  ngOnInit(): void {
    this.fruitsService.fruitsData$.subscribe(data => {
      this.fruitsData = data; 
    });
    
    this.fruitsService.totalAmount$.subscribe(amount => {
      this.totalAmount = amount;
    });

    this.fruitsService.getAllFruits();
  }
}
