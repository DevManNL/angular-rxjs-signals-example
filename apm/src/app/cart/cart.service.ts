import { computed, effect, Injectable, signal } from "@angular/core";
import { CartItem } from "./cart";
import { Product } from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Implement the cartItems signal here
  cartItems: CartItem[] = [];
  
  // Implement the cartCount signal here
  get cartCount() {
    return 0;
  }
  
  // Implement the cartTotals signal here
  subTotal = 0;
  deliveryFee = 0;
  tax = 0;
  totalPrice = 0;

  // Implement the effect here to log the cart array length
  
  
  addToCart(product: Product): void {
    // Implement the addToCart method here

  }

  removeFromCart(cartItem: CartItem): void {
    // Implement the removeFromCart method here
    
  }

  updateQuantity(cardItem: CartItem, quantity: number): void {
    // Implement the updateQuantity method here
  
  }


} 
