import { Component, inject, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { Product } from '../product';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
    selector: 'pm-product-detail',
    templateUrl: './product-detail.component.html',
    imports: [NgIf, NgFor, CurrencyPipe]
})
export class ProductDetailComponent implements OnChanges, OnDestroy {
  @Input() productId: number = 0;
  errorMessage = '';
  sub!: Subscription;

  private productService = inject(ProductService);
  private cardService = inject(CartService);

  product: Product | null = null;
  pageTitle = this.product ? `Product Detail for: ${this.product.productName}` : 'Product Detail';

  // If an input parameter changes, then Angulat will execute this method
  ngOnChanges(changes: SimpleChanges): void {
    const id = changes['productId'].currentValue;	
    if (id) {
      this.sub = this.productService.getProductsById(id)
      .subscribe({
        next: product => {
          this.product = product;
          this.pageTitle = `Product Detail for: ${this.product?.productName}`;
        },
        error: err => this.errorMessage = err
      }); 
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  addToCart(product: Product) {
    this.cardService.addToCart(product);
  }
}
 