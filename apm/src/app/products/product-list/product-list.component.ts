import { Component, inject } from '@angular/core';

import { NgIf, NgFor, NgClass } from '@angular/common';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    standalone: true,
  imports: [NgIf, NgFor, NgClass, ProductDetailComponent]
})
export class ProductListComponent {
  // Just enough here for the template to compile
  pageTitle = 'Products';
  
  private productService = inject(ProductService);
  
  // Products
  //products: Product[] = [];
  //errorMessage = '';
  products = this.productService.products;
  errorMessage = this.productService.productsError;


  // Selected product id to highlight the entry
  selectedProductId: number = 0;
  //selectedProductId = this.productService.selectedProductId;

  onSelected(productId: number): void {
    this.selectedProductId = productId;
  }
}
