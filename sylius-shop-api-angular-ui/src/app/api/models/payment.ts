/* tslint:disable */
import { PaymentMethod } from './payment-method';
export interface Payment {

  /**
   * Current state of a payment.
   */
  state?: 'cart' | 'new' | 'processing' | 'completed' | 'failed' | 'cancelled' | 'refunded';
  method?: PaymentMethod;
}
