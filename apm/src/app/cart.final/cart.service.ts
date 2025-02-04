// import { computed, effect, Injectable, signal } from "@angular/core";
// import { CartItem } from "./cart";
// import { Product } from "../products/product";

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   //cartItems: CartItem[] = [];
//   cartItems = signal<CartItem[]>([]);

//   cartCount = computed(() => this.cartItems()
//     .reduce((accQty, item) => accQty + item.quantity, 0));

//   // Cart total calculations
//   subTotal = computed(() => this.cartItems().reduce((accTotal, item ) => accTotal + (item.product.price * item.quantity), 0));
//   deliveryFee = computed<number> (() => this.subTotal() < 50 ? 5.99 : 0);
//   tax = computed(() => Math.round(this.subTotal() * 10.75) / 100);
//   totalPrice = computed(() => this.subTotal() + this.deliveryFee() + this.tax());

//   eLength = effect(() => console.log('Cart array length', this.cartItems().length));

//   addToCart(product: Product): void {

//     //this.cartItems().push({ product, quantity: 1 });  => This will not work because the array reference is not changing so the signal will not be updated
    
//     // So use the set or update method of the signal and always make sure to make a new array and update the signal with the new array so the change detection can work
//     this.cartItems.update(items => [...items, { product, quantity: 1 }]); 

//   }

//   removeFromCart(cartItem: CartItem): void {
//     this.cartItems.update(items => items.filter(item => item.product.id !== cartItem.product.id));
//   }

//   updateQuantity(cardItem: CartItem, quantity: number): void {
//     this.cartItems.update(items => items.map(item => item.product.id === cardItem.product.id ? { ...item, quantity } : item));
//   }


// } 
