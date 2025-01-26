import { computed, inject, Injectable, signal } from '@angular/core';
import { Product, Result } from './product';
import { catchError, map, of, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorService } from '../utilities/http-error.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';

  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);
  //private reviewService = inject(ReviewService);

  // An observable is used to load the products from the back-end service 
  // and only executed if someone subscribes to it.
  private productsResult$ = this.http.get<Product[]>(this.productsUrl)
  .pipe(
    
    //map is used to transform the result of the observable so that it can be used by the subscribers
    map(p => ({ data: p } as Result<Product[]>)),

    //tap is used to log the result of the observable without changing it
    tap(p => console.log(JSON.stringify(p))),
    
    //shareReplay is used to share the result of the observable with multiple subscribers (like BehaviorSubject)
    shareReplay(1),
    
    catchError(err => of({
      data: [],
      error: this.errorService.formatError(err)
    } as Result<Product[]>))
  );
private productsResult = toSignal(this.productsResult$,
  { initialValue: ({ data: [] } as Result<Product[]>) });
products = computed(() => this.productsResult().data);
productsError = computed(() => this.productsResult().error);

}

