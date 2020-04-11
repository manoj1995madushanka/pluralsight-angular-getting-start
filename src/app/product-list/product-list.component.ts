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

  productList = 'Product List';
  imageWidth = 50 ;
  imageMargin = 2;
  showImage = false;
  // tslint:disable-next-line:variable-name
  _listfilter: string;
  get listFilter(): string {
    return this._listfilter;
    /*this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;*/
  }
  set listFilter(value: string) {
    this._listfilter = value;
    console.log(this._listfilter);
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] ;


  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // tslint:disable-next-line:align no-unused-expression
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string): void {
    this.productList = 'product list: ' + message;
  }

}
