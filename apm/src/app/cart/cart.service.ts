import { computed, effect, Injectable, signal } from "@angular/core";
import { CartItem } from "./cart";
import { Product } from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Implement the cartItems signal here
  cartItems = signal<CartItem[]>([]);

  // Implement the cartCount signal here
  cartCount = computed(() => this.cartItems().reduce((accQty, item) => accQty + item.quantity, 0));

  // Implement the cartTotals signal here
  subTotal = computed(() => this.cartItems().reduce((total, item) => total + (item.quantity * item.product.price), 0));
  deliveryFee = computed<number>(() => this.subTotal() < 50 ? 5.99 : 0);
  tax = computed<number>(() => Math.round(this.subTotal() * 21 / 100))
  totalPrice = computed<number>(() => this.subTotal() + this.deliveryFee() + this.tax());

  // Implement the effect here to log the cart array length
  eLength = effect(() => console.log('Cart array length', this.cartItems().length));

  addToCart(product: Product): void {

    // Implement the addToCart method here
    this.cartItems.update(items => [...items, { product, quantity: 1 }]);
    console.log('Adding to cart', product, this.cartItems());
  }

  removeFromCart(cartItem: CartItem): void {
    // Implement the removeFromCart method here
    this.cartItems.update(items => items.filter(item => item.product.id !== cartItem.product.id));
  }

  updateQuantity(cardItem: CartItem, quantity: number): void {
    this.cartItems.update(items => items.map(item => item.product.id === cardItem.product.id ? { ...item, quantity } : item));
  }


} 
