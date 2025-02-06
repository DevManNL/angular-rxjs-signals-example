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

  // Solution 2
  @Input({ required: true }) set cartItem(ci: CartItem) {
    this.item.set(ci); 
  }
  
  private cartService = inject(CartService);

  item = signal<CartItem>(undefined!);

  // Quantity available (hard-coded to 8)
  // Mapped to an array from 1-8
  qtyArr = [...Array(8).keys()].map(x => x + 1);

  // Calculate the extended price
  exPrice = computed(() => this.item()?.quantity * this.item()?.product.price);
  
  onQuantitySelected(quantity: number): void {
    // Impement the updateQuantity method here from the CartService
    this.cartService.updateQuantity(this.item(), quantity);
  }

  removeFromCart(): void {
    // Implement the removeFromCart method here from the CartService`
    this.cartService.removeFromCart(this.item());
  }
}
