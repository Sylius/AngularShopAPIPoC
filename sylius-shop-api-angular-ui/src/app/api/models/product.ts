/* tslint:disable */
import { ProductTaxon } from './product-taxon';
import { Variant } from './variant';
import { Attribute } from './attribute';
import { Image } from './image';

/**
 * Product with its basic information, variants, attributes, association and images.
 */
export interface Product {
  code?: string;
  name?: string;
  slug?: string;
  averageRating?: number;
  taxons?: ProductTaxon;

  /**
   * Keys reference to code of a variant.
   */
  variants?: {[key: string]: Array<Variant>};
  attributes?: Array<Attribute>;

  /**
   * Keys reference to code of an association.
   */
  associations?: {[key: string]: Array<Product>};
  images?: Array<Image>;
}
