import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ProductListComponent } from './product-list/product-list.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import {ProductService} from './product-list/product.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
