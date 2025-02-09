import { Component, inject } from '@angular/core';
import { NgIf, CurrencyPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
    selector: 'sw-cart-total',
    standalone: true,
    templateUrl: './cart-total.component.html',
    imports: [NgIf, CurrencyPipe]
})
export class CartTotalComponent {
  
  cartItems = []; 
  subTotal = 0; 
  deliveryFee = 0; 
  tax = 0; 
  totalPrice = 0; 

}
