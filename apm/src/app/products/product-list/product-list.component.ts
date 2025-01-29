import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { NgIf, NgFor, NgClass } from '@angular/common';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';
import { Subscription, tap } from 'rxjs';

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    standalone: true,
  imports: [NgIf, NgFor, NgClass, ProductDetailComponent]
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  
  private productService = inject(ProductService);
  
  // Products
  products: Product[] = [];
  errorMessage = '';
  sub!: Subscription;
  /*
  products = this.productService.products;
  errorMessage = this.productService.productsError;
  */

  // Selected product id to highlight the entry
  selectedProductId: number = 0;
  
  /*
  selectedProductId = this.productService.selectedProductId;
  */

  ngOnInit(): void {
    
    console.log('In component init');
    
    // Subscribe to the observable
    this.sub = this.productService.getProducts()
    // With a pipe, you can chain multiple operators to the observable
    .pipe(
      // tap is een operator die een side-effect uitvoert zonder de data te veranderen
      tap(() => console.log('In component pipeline'))
    )
    // Only if you subscribe to the observable, the request is sent to the server
    .subscribe({
      // next is called when the observable emits a value
      next: products => {
        this.products = products;
        console.log('In component next', this.products);
      },
      // error is called when the observable emits an error
      error: err => this.errorMessage = err
    }); 
  }

  // If the user selects a product, the selectedProductId is set to the productId
  onSelected(productId: number): void {
    this.selectedProductId = productId;
  }

  // If the component is destroyed, the subscription is unsubscribed
  ngOnDestroy(): void {
    console.log('In component destroy');
    this.sub.unsubscribe(); 
  }
}
