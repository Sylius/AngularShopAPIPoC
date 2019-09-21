/* tslint:disable */
import { Price } from './price';
export interface ShippingMethod {
  code?: string;
  name?: string;
  description?: string;
  price?: Price;
}
