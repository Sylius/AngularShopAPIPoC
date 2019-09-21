/* tslint:disable */
import { ShippingMethod } from './shipping-method';

/**
 * Available shipping methods for each shipment.
 */
export interface AvailableShippingMethods {
  shipments?: Array<{methods?: {[key: string]: ShippingMethod}}>;
}
