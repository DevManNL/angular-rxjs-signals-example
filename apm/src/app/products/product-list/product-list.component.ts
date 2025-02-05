import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Subscription, tap } from 'rxjs';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
    selector: 'pm-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    imports: [NgIf, NgFor, NgClass, ProductDetailComponent, AsyncPipe]
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  
  private productService = inject(ProductService);
  
  // Products
  products: Product[] = [];
  errorMessage = '';
  sub = new Subscription();
  
  // Selected product id to highlight the entry
  selectedProductId: number = 0;

  readonly selectedProductId$ = this.productService.productSelected$
    .pipe(
      tap((id) => console.log('In component productSelected pipeline', id))
    );
  
  // Angular lifecycle hook
  ngOnInit(): void {
    
    console.log('In component init');
    
    /**
     * Subscribe to the observable for products
     */
    
    /*
    this.sub.add(this.productService.getProducts()
    // With a pipe, you can chain multiple operators to the observable
    .pipe(
      // tap is a operator which executes a side-effect without altering data
      tap(() => console.log('In component getProducts pipeline'))
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
    })); 
    */

    this.sub.add(
      this.productService.getProducts()
        .pipe(
          tap(() => console.log('In component getProducts pipeline'))
        )
        .subscribe(products => this.products = products));
  }

  // If the user selects a product, the selectedProductId is set to the productId
  onSelected(productId: number): void {
    this.productService.selectProduct(productId); 
  }

  // If the component is destroyed, the subscription is unsubscribed
  ngOnDestroy(): void {
    console.log('In component destroy');
    this.sub.unsubscribe(); 
  }
}
