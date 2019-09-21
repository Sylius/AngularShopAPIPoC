/* tslint:disable */
import { Page } from './page';
import { Product } from './product';
export interface ProductsPage extends Page {
  items?: Array<Product>;
}
