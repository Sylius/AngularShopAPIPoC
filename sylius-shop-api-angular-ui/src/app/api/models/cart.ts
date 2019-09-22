/* tslint:disable */
import { TotalsView } from './totals-view';
import { Item } from './item';
import { Address } from './address';
import { Payment } from './payment';
import { Shipment } from './shipment';
import { Discount } from './discount';

/**
 * Cart with information about items, current state, totals and more.
 */
export interface Cart {
  totals?: TotalsView;
  tokenValue?: string;

  /**
   * Code of the cart currency according to ISO 4217. This value is inherited from channel
   */
  currency?: string;

  /**
   * Code of the cart locale. This value is inherited from channel
   */
  locale?: string;

  /**
   * Current state of a checkout.
   */
  checkoutState?: 'cart' | 'addressed' | 'shipping_selected' | 'payment_selected' | 'completed';
  items?: Array<Item>;
  channel?: string;
  shippingAddress?: Address;
  billingAddress?: Address;
  payments?: Array<Payment>;
  shipments?: Array<Shipment>;
  cartDiscounts?: Array<{[key: string]: Discount}>;

  /**
   * Code of the coupon that is associated with this cart
   */
  couponCode?: string;
}
