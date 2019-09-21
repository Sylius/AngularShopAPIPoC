/* tslint:disable */
import { TotalsView } from './totals-view';
import { CartItem } from './cart-item';
import { Address } from './address';
import { Payment } from './payment';
import { Shipment } from './shipment';
import { Cart_cartDiscounts } from './cart-_cart-discounts';

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
  items?: Array<CartItem>;
  channel?: string;
  shippingAddress?: Address;
  billingAddress?: Address;
  payments?: Array<Payment>;
  shipments?: Array<Shipment>;
  cartDiscounts?: Array<Cart_cartDiscounts>;
}
