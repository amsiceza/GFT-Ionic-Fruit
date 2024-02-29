import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FruitsComponent } from '../components/fruits/fruits.component';
import { FruitsCardComponent } from '../components/fruits-card/fruits-card.component';
import { CartComponent } from '../components/cart/cart.component';
import { CartCardComponent } from '../components/cart-card/cart-card.component';
import { ConfirmCartComponent } from '../components/confirm-cart/confirm-cart.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, FruitsComponent, FruitsCardComponent, CartComponent, CartCardComponent, ConfirmCartComponent]
})
export class HomePageModule {}
