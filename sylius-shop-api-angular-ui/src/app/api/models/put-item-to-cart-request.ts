/* tslint:disable */

/**
 * Body of request used to put item to the cart.
 */
export interface PutItemToCartRequest {
  productCode: string;
  quantity?: number;
  variantCode?: string;

  /**
   * Keys reference to the code of an option and values to the code of option value.
   */
  options?: {[key: string]: string};
}
