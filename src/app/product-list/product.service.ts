import { Injectable } from '@angular/core';
import {IProduct} from './Product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'http://localhost:4200/assets/data/product-list.json';

  constructor(private httpClient: HttpClient) { }

  getProducts(): IProduct[] {
    return [
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2019',
        description: 'description',
        price: 150.00,
        starRating: 4.2,
        imageUrl: 'assets/images/cart.jpg'
      },
      {
        productId: 2,
        productName: 'Hammer',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2019',
        description: 'description',
        price: 150.00,
        starRating: 2.2,
        imageUrl: 'assets/images/hammer.jpg'
      }
    ];
  }
  getProductFromUrl(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occured: ' + (err.error.message);
    } else {
      errorMessage = 'Server returns ...';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
