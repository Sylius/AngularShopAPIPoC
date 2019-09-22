/* tslint:disable */
import { Product } from './product';

/**
 * Item with calculated prices, quantity and related product.
 */
export interface Item {
  id?: number;
  quantity?: number;
  total?: number;
  product?: Product;
}
