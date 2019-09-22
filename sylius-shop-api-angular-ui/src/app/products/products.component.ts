import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsPage, Taxon } from '../api/models';
import { ProductsService, TaxonsService } from '../api/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  taxons: Observable<Taxon[]>;


  constructor(
    private productService: ProductsService,
    private taxonsService: TaxonsService,
  ) {
  }

  ngOnInit() {

    this.taxons = this.taxonsService.taxonTree();
    // this.products = this.productService.prodo({
    //   channel: 'FASHION_WEB',
    //   slug: 't-shirts/men'
    // });
  }
}
