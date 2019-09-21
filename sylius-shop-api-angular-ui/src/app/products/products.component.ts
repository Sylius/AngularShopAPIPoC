import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsPage } from '../api/models';
import { ProductsService } from '../api/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<ProductsPage>;


  constructor(
    private productService: ProductsService,
  ) {
  }

  ngOnInit() {

    this.products = this.productService.productCatalogTaxonBySlug({
      channel: 'FASHION_WEB',
      slug: 't-shirts/men'
    });
  }
}
