/* tslint:disable */
import { PaymentMethod } from './payment-method';

/**
 * Available payment methods for each payment.
 */
export interface AvailablePaymentMethods {
  payments?: Array<{methods?: {[key: string]: PaymentMethod}}>;
}
