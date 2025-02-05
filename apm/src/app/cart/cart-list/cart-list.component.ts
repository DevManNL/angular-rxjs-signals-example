import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CartItem } from '../cart';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../cart.service';

@Component({
    selector: 'sw-cart-list',
    imports: [CartItemComponent, NgFor, NgIf],
    templateUrl: 'cart-list.component.html'
})
export class CartListComponent {
  pageTitle = 'Cart';

  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;
}
