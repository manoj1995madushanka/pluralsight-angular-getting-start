import {Component, OnInit} from '@angular/core';
import {IProduct} from './Product';
import {filter} from 'rxjs/operators';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  get listFilter(): string {
    return this._listfilter;
    /*this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;*/
  }
  set listFilter(value: string) {
    this._listfilter = value;
    console.log(this._listfilter);
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private productService: ProductService) {
  }

  productList = 'Product List';
  imageWidth = 50 ;
  imageMargin = 2;
  showImage = false;
  // tslint:disable-next-line:variable-name
  _listfilter: string;
  filteredProducts: IProduct[];
  products: IProduct[] ;

  errorMessage: string;


  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // tslint:disable-next-line:align no-unused-expression
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
   /* this.products = this.productService.getProducts();*/
    this.productService.getProductFromUrl().subscribe(
      {
        next: product => {
          this.products = product
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
  }

  onRatingClicked(message: string): void {
    this.productList = 'product list: ' + message;
  }

}
