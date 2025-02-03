import { effect, Injectable, signal } from "@angular/core";
import { CartItem } from "./cart";
import { Product } from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //cartItems: CartItem[] = [];
  cartItems = signal<CartItem[]>([]);


  eLength = effect(() => console.log('Cart array length', this.cartItems().length));


  addToCart(product: Product): void {

    //this.cartItems().push({ product, quantity: 1 });  => This will not work because the array reference is not changing so the signal will not be updated
    
    // So use the set or update method of the signal and always make sure to make a new array and update the signal with the new array so the change detection can work
    this.cartItems.update(items => [...items, { product, quantity: 1 }]); 

  }

} 
