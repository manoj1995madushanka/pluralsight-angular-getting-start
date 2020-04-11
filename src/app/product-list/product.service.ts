import { Injectable } from '@angular/core';
import {IProduct} from './Product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'www.getJson.com';

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
  getProductFromUrl() {
    return this.httpClient.get<IProduct[]>(this.productUrl);
  }
}
