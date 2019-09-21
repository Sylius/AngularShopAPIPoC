import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../api/models';
import { ProductsService } from '../api/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;


  constructor(
    private productService: ProductsService,
  ) {
  }

  ngOnInit() {

    this.products = this.productService.latestProducts({
      // limit: 100,
      // locale: 'de'
    });
  }
}
