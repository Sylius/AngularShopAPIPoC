/* tslint:disable */
import { Product } from './product';

/**
 * Cart item with calculated prices, quantity and related product.
 */
export interface CartItem {
  id?: number;
  quantity?: number;
  total?: {};
  product?: Product;
}
