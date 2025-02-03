import { Component, inject } from '@angular/core';
import { NgIf, CurrencyPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'sw-cart-total',
  templateUrl: './cart-total.component.html',
  standalone: true,
  imports: [NgIf, CurrencyPipe]
})
export class CartTotalComponent {
  
  private cardService = inject(CartService);
  
  cartItems = this.cardService.cartItems;
  subTotal = this.cardService.subTotal;
  deliveryFee = this.cardService.deliveryFee;
  tax = this.cardService.tax;
  totalPrice = this.cardService.totalPrice;

}
