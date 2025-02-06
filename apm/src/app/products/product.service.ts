import { computed, inject, Injectable, signal } from '@angular/core';
import { Product, Result } from './product';
import { BehaviorSubject, catchError, map, Observable, of, shareReplay, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorService } from '../utilities/http-error.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';

  private http = inject(HttpClient);
  
  // Implement productSelected behaviour subject
  // private productSelectedSubject = new BehaviorSubject<number>(0);
  // productSelected$ = this.productSelectedSubject.asObservable();
  

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productsUrl)
  //     .pipe(
  //       tap(() => console.log('In http.get pipeline'))
  //     );
  // }
  
  // Implement getProducts observable
  

  getProductsById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`)
      .pipe(
        //map(p => ({ data: p } as Result<Product>)),
        tap(p => console.log('In http.get by id pipeline', p))
      );
  }

  selectProduct(id: number): void {
    console.log('In selectProduct');

    // Implement next value set on the BehaviorSubject
    //this.productSelectedSubject.next(id);
  }
}
