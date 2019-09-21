/* tslint:disable */
import { Address } from './address';

/**
 * Body of request used for cart addressing.
 */
export interface CheckoutAddressRequest {
  shippingAddress: Address;
  billingAddress?: Address;
}
