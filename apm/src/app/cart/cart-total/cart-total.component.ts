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
  
  //private cardService = inject(CartService);
  
  cartItems = []; //this.cardService.cartItems;
  subTotal = 0; //this.cardService.subTotal;
  deliveryFee = 0; //this.cardService.deliveryFee;
  tax = 0; //this.cardService.tax;
  totalPrice = 0 //this.cardService.totalPrice;

}
