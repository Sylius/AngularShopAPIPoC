/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Cart } from '../models/cart';
import { CheckoutAddressRequest } from '../models/checkout-address-request';
import { AvailableShippingMethods } from '../models/available-shipping-methods';
import { CheckoutChooseShippingMethodRequest } from '../models/checkout-choose-shipping-method-request';
import { AvailablePaymentMethods } from '../models/available-payment-methods';
import { CheckoutChoosePaymentMethodRequest } from '../models/checkout-choose-payment-method-request';
import { CheckoutCompleteRequest } from '../models/checkout-complete-request';

/**
 * All actions related to checkout fulfillment. It is important, to execute them in given order (address, choose shipment, choose payment and complete).
 */
@Injectable({
  providedIn: 'root',
})
class CheckoutService extends __BaseService {
  static readonly checkoutSummarizePath = '/checkout/{token}';
  static readonly checkoutAddressPath = '/checkout/{token}/address';
  static readonly checkoutShowAvailableShippingMethodsPath = '/checkout/{token}/shipping';
  static readonly checkoutChooseShippingMethodPath = '/checkout/{token}/shipping/{id}';
  static readonly checkoutShowAvailablePaymentMethodsPath = '/checkout/{token}/payment';
  static readonly checkoutChoosePaymentMethodPath = '/checkout/{token}/payment/{id}';
  static readonly checkoutCompletePath = '/checkout/{token}/complete';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This endpoint will show the summarized cart during checkout. This action is an equivalent of cart summarize action.
   * @param token Cart identifier.
   * @return Current state of the cart, with calculated prices and related items.
   */
  checkoutSummarizeResponse(token: string): __Observable<__StrictHttpResponse<Cart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/checkout/${token}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Cart>;
      })
    );
  }
  /**
   * This endpoint will show the summarized cart during checkout. This action is an equivalent of cart summarize action.
   * @param token Cart identifier.
   * @return Current state of the cart, with calculated prices and related items.
   */
  checkoutSummarize(token: string): __Observable<Cart> {
    return this.checkoutSummarizeResponse(token).pipe(
      __map(_r => _r.body as Cart)
    );
  }

  /**
   * This endpoint will allow you to add billing and shipping addresses to the cart and begin the checkout process. You can either define the same shipping and billing address or specify them separately.
   * @param params The `CheckoutService.CheckoutAddressParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`:
   */
  checkoutAddressResponse(params: CheckoutService.CheckoutAddressParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/checkout/${params.token}/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint will allow you to add billing and shipping addresses to the cart and begin the checkout process. You can either define the same shipping and billing address or specify them separately.
   * @param params The `CheckoutService.CheckoutAddressParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`:
   */
  checkoutAddress(params: CheckoutService.CheckoutAddressParams): __Observable<null> {
    return this.checkoutAddressResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will show you available shipping methods for all cart shipments.
   * @param token Cart identifier.
   * @return Get available shipping methods.
   */
  checkoutShowAvailableShippingMethodsResponse(token: string): __Observable<__StrictHttpResponse<AvailableShippingMethods>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/checkout/${token}/shipping`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AvailableShippingMethods>;
      })
    );
  }
  /**
   * This endpoint will show you available shipping methods for all cart shipments.
   * @param token Cart identifier.
   * @return Get available shipping methods.
   */
  checkoutShowAvailableShippingMethods(token: string): __Observable<AvailableShippingMethods> {
    return this.checkoutShowAvailableShippingMethodsResponse(token).pipe(
      __map(_r => _r.body as AvailableShippingMethods)
    );
  }

  /**
   * This endpoint will allow you to choose a cart shipping method.
   * @param params The `CheckoutService.CheckoutChooseShippingMethodParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `id`: Order number of shipment for which shipping method should be specified.
   *
   * - `content`:
   */
  checkoutChooseShippingMethodResponse(params: CheckoutService.CheckoutChooseShippingMethodParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.content;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/checkout/${params.token}/shipping/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint will allow you to choose a cart shipping method.
   * @param params The `CheckoutService.CheckoutChooseShippingMethodParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `id`: Order number of shipment for which shipping method should be specified.
   *
   * - `content`:
   */
  checkoutChooseShippingMethod(params: CheckoutService.CheckoutChooseShippingMethodParams): __Observable<null> {
    return this.checkoutChooseShippingMethodResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will show you available payment methods for all cart payments.
   * @param token Cart identifier.
   * @return Get available payment methods.
   */
  checkoutShowAvailablePaymentMethodsResponse(token: string): __Observable<__StrictHttpResponse<AvailablePaymentMethods>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/checkout/${token}/payment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AvailablePaymentMethods>;
      })
    );
  }
  /**
   * This endpoint will show you available payment methods for all cart payments.
   * @param token Cart identifier.
   * @return Get available payment methods.
   */
  checkoutShowAvailablePaymentMethods(token: string): __Observable<AvailablePaymentMethods> {
    return this.checkoutShowAvailablePaymentMethodsResponse(token).pipe(
      __map(_r => _r.body as AvailablePaymentMethods)
    );
  }

  /**
   * This endpoint will allow you to choose cart a payment method.
   * @param params The `CheckoutService.CheckoutChoosePaymentMethodParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `id`: Order number of payment for which payment method should be specified.
   *
   * - `content`:
   */
  checkoutChoosePaymentMethodResponse(params: CheckoutService.CheckoutChoosePaymentMethodParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.content;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/checkout/${params.token}/payment/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint will allow you to choose cart a payment method.
   * @param params The `CheckoutService.CheckoutChoosePaymentMethodParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `id`: Order number of payment for which payment method should be specified.
   *
   * - `content`:
   */
  checkoutChoosePaymentMethod(params: CheckoutService.CheckoutChoosePaymentMethodParams): __Observable<null> {
    return this.checkoutChoosePaymentMethodResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will allow you to complete the checkout.
   * @param params The `CheckoutService.CheckoutCompleteParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`:
   */
  checkoutCompleteResponse(params: CheckoutService.CheckoutCompleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/checkout/${params.token}/complete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint will allow you to complete the checkout.
   * @param params The `CheckoutService.CheckoutCompleteParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`:
   */
  checkoutComplete(params: CheckoutService.CheckoutCompleteParams): __Observable<null> {
    return this.checkoutCompleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CheckoutService {

  /**
   * Parameters for checkoutAddress
   */
  export interface CheckoutAddressParams {

    /**
     * Cart identifier.
     */
    token: string;
    content: CheckoutAddressRequest;
  }

  /**
   * Parameters for checkoutChooseShippingMethod
   */
  export interface CheckoutChooseShippingMethodParams {

    /**
     * Cart identifier.
     */
    token: string;

    /**
     * Order number of shipment for which shipping method should be specified.
     */
    id: string;
    content: CheckoutChooseShippingMethodRequest;
  }

  /**
   * Parameters for checkoutChoosePaymentMethod
   */
  export interface CheckoutChoosePaymentMethodParams {

    /**
     * Cart identifier.
     */
    token: string;

    /**
     * Order number of payment for which payment method should be specified.
     */
    id: string;
    content: CheckoutChoosePaymentMethodRequest;
  }

  /**
   * Parameters for checkoutComplete
   */
  export interface CheckoutCompleteParams {

    /**
     * Cart identifier.
     */
    token: string;
    content: CheckoutCompleteRequest;
  }
}

export { CheckoutService }
