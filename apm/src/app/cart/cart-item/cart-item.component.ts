import { Component, computed, inject, Input, signal } from '@angular/core';

import { CartItem } from '../cart';
import { CartService } from '../cart.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'sw-cart-item',
    standalone: true,
    imports: [CurrencyPipe, FormsModule, NgFor, NgIf],
    templateUrl: './cart-item.component.html'
})
export class CartItemComponent {

  @Input({ required: true }) cartItem!: CartItem;

  // Quantity available (hard-coded to 8)
  // Mapped to an array from 1-8
  qtyArr = [...Array(8).keys()].map(x => x + 1);

  // Calculate the extended price
  exPrice = 0;
  
  onQuantitySelected(quantity: number): void {
    // Implement the updateQuantity method here

  }


  removeFromCart(): void {
    // Implement the removeFromCart method here

  }
}
