/* tslint:disable */
export interface TotalsView {

  /**
   * Total cost of the cart. The sum of all properties below.
   */
  total?: number;

  /**
   * Total cost of the cart items.
   */
  items?: number;

  /**
   * Total amount of cart taxes.
   */
  taxes?: number;

  /**
   * Total cost of the cart shipment.
   */
  shipping?: number;

  /**
   * Total amount of cart promotions.
   */
  promotion?: number;
}
