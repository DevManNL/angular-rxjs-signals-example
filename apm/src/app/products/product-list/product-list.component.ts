import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Observable, Subscription, tap } from 'rxjs';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
    selector: 'pm-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    imports: [NgIf, NgFor, NgClass, ProductDetailComponent, AsyncPipe]
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  
  // Inject the ProductService
  
  // Products
  products: Product[] = [];
  errorMessage = '';
  
  sub: any = null;
  
  // Selected product id to highlight the entry
  selectedProductId: number = 0;

  // Implement selectedProductId observable
  readonly selectedProductId$ = new Observable<number>();
  
  // Angular lifecycle hook
  ngOnInit(): void {
    
    console.log('In component init');
    
    // Add getProducts observable

  }

  // If the user selects a product, the selectedProductId is set to the productId
  onSelected(productId: number): void {
    // Call selectProduct method from the service

  }

  // If the component is destroyed, the subscription is unsubscribed
  ngOnDestroy(): void {
    console.log('In component destroy');
    // Unsubscribe from the subscription

  }
}
