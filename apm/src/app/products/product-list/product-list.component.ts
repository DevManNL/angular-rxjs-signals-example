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
    this.sub = this.productService.getProducts()
    .pipe(
      tap(() => console.log('In component pipeline'))
    )
    .subscribe({
      next: products => {
        this.products = products;
        console.log('In component next', this.products);
      },
      error: err => this.errorMessage = err
    }); 
  }

  ngOnDestroy(): void {
    console.log('In component destroy');
    this.sub.unsubscribe(); 
  }


  onSelected(productId: number): void {
    this.selectedProductId = productId;
  }
}
