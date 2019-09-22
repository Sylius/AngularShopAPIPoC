/* tslint:disable */
import { Item } from './item';
import { TotalsView } from './totals-view';
import { Address } from './address';
import { Payment } from './payment';
import { Shipment } from './shipment';
import { Discount } from './discount';

/**
 * Placed order with information about items, current state, totals and more.
 */
export interface PlacedOrder {
  items?: Array<Item>;
  tokenValue?: string;

  /**
   * Code of the cart currency according to ISO 4217. This value is inherited from channel
   */
  currency?: string;

  /**
   * Code of the order locale. This value is inherited from channel
   */
  locale?: string;

  /**
   * Current state of a checkout.
   */
  checkoutState?: 'cart' | 'new' | 'fulfilled' | 'cancelled';

  /**
   * Date the order was completed in ISO 8601 format.
   */
  checkoutCompletedAt?: string;
  channel?: string;
  totals?: TotalsView;
  shippingAddress?: Address;
  billingAddress?: Address;
  payments?: Array<Payment>;
  shipments?: Array<Shipment>;
  cartDiscounts?: Array<{[key: string]: Discount}>;
}
