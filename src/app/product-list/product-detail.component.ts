import { Component, OnInit } from '@angular/core';
import {IProduct} from './Product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ': ' + id;
    this.product = {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: 'description',
      price: 150.00,
      starRating: 4.2,
      imageUrl: 'assets/images/cart.jpg'
    };
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
