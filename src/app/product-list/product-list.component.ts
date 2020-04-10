import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList = 'Product List';
  products: any = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: 'description',
      price: 150.00,
      starRating: 4.2,
      imageUrl: 'assest/image/garden-cart.png'
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: 'description',
      price: 150.00,
      starRating: 4.2,
      imageUrl: 'assest/image/garden-cart.png'
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
