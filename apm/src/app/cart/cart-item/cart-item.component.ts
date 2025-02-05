import { Component, computed, inject, Input, signal } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartItem } from '../cart';
import { CartService } from '../cart.service';

@Component({
    selector: 'sw-cart-item',
    imports: [CurrencyPipe, FormsModule, NgFor, NgIf],
    templateUrl: './cart-item.component.html'
})
export class CartItemComponent {

  // Solution 1
  //@Input({ required: true }) cartItem!: CartItem;

  // Solution 2
  @Input({ required: true }) set cartItem(ci: CartItem) {
    this.item.set(ci);
  }
  
  private cartService = inject(CartService);

  // Solution 2.
  item = signal<CartItem>(undefined!);

  // Quantity available (hard-coded to 8)
  // Mapped to an array from 1-8
  qtyArr = [...Array(8).keys()].map(x => x + 1);

  // Calculate the extended price
  //exPrice = this.cartItem?.quantity * this.cartItem?.product.price;
 
  // Solution 1
  // exPrice = computed(() => { 
  //     const cardItem = this.cartService.cartItems().find(item => item.product.id === this.cartItem.product.id);
  //     if (cardItem) {
  //       return cardItem.quantity * this.cartItem.product.price;
  //     }
  //     return 0;
  // });
 
  // Solution 2
  exPrice = computed(() => { 
    return this.item().quantity * this.item().product.price;
  });


  // Solution 1
  // onQuantitySelected(quantity: number): void {
  //   this.cartService.updateQuantity(this.cartItem, Number(quantity));
  // }

  // Solution 2
  onQuantitySelected(quantity: number): void {
    this.cartService.updateQuantity(this.item(), Number(quantity));
  }


  // Solution 1
  // removeFromCart(): void {
  //   this.cartService.removeFromCart(this.cartItem);
  // }

  // Solution 2
  removeFromCart(): void {
    this.cartService.removeFromCart(this.item());
  }
}
