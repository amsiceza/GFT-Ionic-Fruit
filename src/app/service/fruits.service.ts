import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fruitsData } from 'src/mocks/fruits-data';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  private fruitsSubject = new BehaviorSubject<any>(null);
  public fruitsData$ = this.fruitsSubject.asObservable();

  private totalAmountSubject = new BehaviorSubject<number>(0);
  public totalAmount$ = this.totalAmountSubject.asObservable();

  constructor() { }

  getAllFruits() {
    this.fruitsSubject.next(fruitsData);
  }

  addAmount() {
    const currentAmount = this.totalAmountSubject.value;
    this.totalAmountSubject.next(currentAmount + 1);
  }
  removeAmount(){
    const currentAmount = this.totalAmountSubject.value;
    if(currentAmount > 0){
      this.totalAmountSubject.next(currentAmount - 1);
    }
    
  }
}
