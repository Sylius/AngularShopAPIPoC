/* tslint:disable */
import { Price } from './price';
export interface Discount {

  /**
   * Name of promotion.
   */
  name?: string;
  amount?: Price;
}
