/* tslint:disable */
import { Price } from './price';
import { Image } from './image';

/**
 * If the product is simple it will have only one variant with the same code and name. Otherwise, the product can have a list of variants with different fields.
 */
export interface Variant {
  code?: string;
  name?: string;

  /**
   * List of codes of associated product options.
   */
  axis?: Array<string>;

  /**
   * Map of keys from previous field to translated values of given variant.
   */
  nameAxis?: {[key: string]: string};
  price?: Price;
  images?: Array<Image>;
}
