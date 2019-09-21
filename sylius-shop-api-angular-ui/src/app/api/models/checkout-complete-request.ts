/* tslint:disable */

/**
 * Body of request used to complete checkout.
 */
export interface CheckoutCompleteRequest {

  /**
   * Email of a customer.
   */
  email: string;

  /**
   * Additional notes.
   */
  notes?: string;
}
