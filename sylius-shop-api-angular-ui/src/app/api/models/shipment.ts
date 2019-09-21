/* tslint:disable */
import { ShippingMethod } from './shipping-method';
export interface Shipment {

  /**
   * Current state of a shipment.
   */
  state?: 'cart' | 'ready' | 'cancelled' | 'shipped';
  method?: ShippingMethod;
}
