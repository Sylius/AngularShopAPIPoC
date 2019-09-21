/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PickupCartRequest } from '../models/pickup-cart-request';
import { Cart } from '../models/cart';
import { PutItemToCartRequest } from '../models/put-item-to-cart-request';
import { PutItemsToCartRequest } from '../models/put-items-to-cart-request';
import { ChangeItemQuantityRequest } from '../models/change-item-quantity-request';
import { EstimatedShippingCost } from '../models/estimated-shipping-cost';
import { AddCouponRequest } from '../models/add-coupon-request';

/**
 * All actions related to cart management.
 */
@Injectable({
  providedIn: 'root',
})
class CartService extends __BaseService {
  static readonly cartPickUpPath = '/carts';
  static readonly cartSummarizePath = '/carts/{token}';
  static readonly deprecatedCartPickUpPath = '/carts/{token}';
  static readonly cartDropPath = '/carts/{token}';
  static readonly cartPostItemPath = '/carts/{token}/items';
  static readonly cartPutItemsPath = '/carts/{token}/multiple-items';
  static readonly cartPutItemPath = '/carts/{token}/items/{identifier}';
  static readonly cartDeleteItemsPath = '/carts/{token}/items/{identifier}';
  static readonly estimateShippingCostPath = '/carts/{token}/estimated-shipping-cost';
  static readonly cartAddCouponPath = '/carts/{token}/coupon';
  static readonly cartRemoveCouponPath = '/carts/{token}/coupon';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This endpoint will allow you to create a new cart.
   * @param content Contains an information about the channel which should be associated with the newly created cart
   */
  cartPickUpResponse(content: PickupCartRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/carts`,
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
   * This endpoint will allow you to create a new cart.
   * @param content Contains an information about the channel which should be associated with the newly created cart
   */
  cartPickUp(content: PickupCartRequest): __Observable<null> {
    return this.cartPickUpResponse(content).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint shows you the current calculated state of cart.
   * @param token Cart identifier.
   * @return Current state of the cart, with calculated prices and related items.
   */
  cartSummarizeResponse(token: string): __Observable<__StrictHttpResponse<Cart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/carts/${token}`,
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
   * This endpoint shows you the current calculated state of cart.
   * @param token Cart identifier.
   * @return Current state of the cart, with calculated prices and related items.
   */
  cartSummarize(token: string): __Observable<Cart> {
    return this.cartSummarizeResponse(token).pipe(
      __map(_r => _r.body as Cart)
    );
  }

  /**
   * This endpoint will allow you to assign a new cart to the provided token. We recommend using UUID as a token to avoid duplication. If any of previous carts or orders already have the same token value an exception will be thrown.
   * @param params The `CartService.DeprecatedCartPickUpParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`: Contains an information about the channel which should be associated with the newly created cart
   */
  deprecatedCartPickUpResponse(params: CartService.DeprecatedCartPickUpParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/carts/${params.token}`,
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
   * This endpoint will allow you to assign a new cart to the provided token. We recommend using UUID as a token to avoid duplication. If any of previous carts or orders already have the same token value an exception will be thrown.
   * @param params The `CartService.DeprecatedCartPickUpParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`: Contains an information about the channel which should be associated with the newly created cart
   */
  deprecatedCartPickUp(params: CartService.DeprecatedCartPickUpParams): __Observable<null> {
    return this.deprecatedCartPickUpResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will remove the cart and all of the related cart items.
   * @param token Cart identifier.
   */
  cartDropResponse(token: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/carts/${token}`,
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
   * This endpoint will remove the cart and all of the related cart items.
   * @param token Cart identifier.
   */
  cartDrop(token: string): __Observable<null> {
    return this.cartDropResponse(token).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will allow you to add a new item to your cart.
   * @param params The `CartService.CartPostItemParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`: Description of an item. The smallest required amount of data is a product code and quantity for a simple product. Configurable products will require an additional `variant_code` or `options` field, but never both.
   *
   * @return Item has been added to the cart
   */
  cartPostItemResponse(params: CartService.CartPostItemParams): __Observable<__StrictHttpResponse<Cart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/carts/${params.token}/items`,
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
   * This endpoint will allow you to add a new item to your cart.
   * @param params The `CartService.CartPostItemParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`: Description of an item. The smallest required amount of data is a product code and quantity for a simple product. Configurable products will require an additional `variant_code` or `options` field, but never both.
   *
   * @return Item has been added to the cart
   */
  cartPostItem(params: CartService.CartPostItemParams): __Observable<Cart> {
    return this.cartPostItemResponse(params).pipe(
      __map(_r => _r.body as Cart)
    );
  }

  /**
   * This endpoint will allow you to add a new item to your cart.
   * @param params The `CartService.CartPutItemsParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`: Description of items. The same rules applied to each of the array values as to the previous point.
   *
   * @return Item has been added to the cart
   */
  cartPutItemsResponse(params: CartService.CartPutItemsParams): __Observable<__StrictHttpResponse<Cart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/carts/${params.token}/multiple-items`,
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
   * This endpoint will allow you to add a new item to your cart.
   * @param params The `CartService.CartPutItemsParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`: Description of items. The same rules applied to each of the array values as to the previous point.
   *
   * @return Item has been added to the cart
   */
  cartPutItems(params: CartService.CartPutItemsParams): __Observable<Cart> {
    return this.cartPutItemsResponse(params).pipe(
      __map(_r => _r.body as Cart)
    );
  }

  /**
   * @param params The `CartService.CartPutItemParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `identifier`: Identifier of a specific item. Can be found in the cart summary.
   *
   * - `content`:
   */
  cartPutItemResponse(params: CartService.CartPutItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.content;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/carts/${params.token}/items/${params.identifier}`,
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
   * @param params The `CartService.CartPutItemParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `identifier`: Identifier of a specific item. Can be found in the cart summary.
   *
   * - `content`:
   */
  cartPutItem(params: CartService.CartPutItemParams): __Observable<null> {
    return this.cartPutItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will remove one item from your cart
   * @param params The `CartService.CartDeleteItemsParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `identifier`: Identifier of a specific item. Can be found in the cart summary.
   */
  cartDeleteItemsResponse(params: CartService.CartDeleteItemsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/carts/${params.token}/items/${params.identifier}`,
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
   * This endpoint will remove one item from your cart
   * @param params The `CartService.CartDeleteItemsParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `identifier`: Identifier of a specific item. Can be found in the cart summary.
   */
  cartDeleteItems(params: CartService.CartDeleteItemsParams): __Observable<null> {
    return this.cartDeleteItemsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CartService.EstimateShippingCostParams` containing the following parameters:
   *
   * - `token`: Cart identifier
   *
   * - `countryCode`: Shipping Country
   *
   * - `provinceCode`: Province to ship to
   *
   * @return Price was calculated
   */
  estimateShippingCostResponse(params: CartService.EstimateShippingCostParams): __Observable<__StrictHttpResponse<EstimatedShippingCost>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.countryCode != null) __params = __params.set('countryCode', params.countryCode.toString());
    if (params.provinceCode != null) __params = __params.set('provinceCode', params.provinceCode.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/carts/${params.token}/estimated-shipping-cost`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EstimatedShippingCost>;
      })
    );
  }
  /**
   * @param params The `CartService.EstimateShippingCostParams` containing the following parameters:
   *
   * - `token`: Cart identifier
   *
   * - `countryCode`: Shipping Country
   *
   * - `provinceCode`: Province to ship to
   *
   * @return Price was calculated
   */
  estimateShippingCost(params: CartService.EstimateShippingCostParams): __Observable<EstimatedShippingCost> {
    return this.estimateShippingCostResponse(params).pipe(
      __map(_r => _r.body as EstimatedShippingCost)
    );
  }

  /**
   * This endpoint will allow you to add a promotion coupon code to the cart and receive the discount.
   * @param params The `CartService.CartAddCouponParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`:
   */
  cartAddCouponResponse(params: CartService.CartAddCouponParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/carts/${params.token}/coupon`,
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
   * This endpoint will allow you to add a promotion coupon code to the cart and receive the discount.
   * @param params The `CartService.CartAddCouponParams` containing the following parameters:
   *
   * - `token`: Cart identifier.
   *
   * - `content`:
   */
  cartAddCoupon(params: CartService.CartAddCouponParams): __Observable<null> {
    return this.cartAddCouponResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will allow you to remove a promotion coupon code from the cart.
   * @param token Cart identifier.
   */
  cartRemoveCouponResponse(token: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/carts/${token}/coupon`,
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
   * This endpoint will allow you to remove a promotion coupon code from the cart.
   * @param token Cart identifier.
   */
  cartRemoveCoupon(token: string): __Observable<null> {
    return this.cartRemoveCouponResponse(token).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CartService {

  /**
   * Parameters for deprecatedCartPickUp
   */
  export interface DeprecatedCartPickUpParams {

    /**
     * Cart identifier.
     */
    token: string;

    /**
     * Contains an information about the channel which should be associated with the newly created cart
     */
    content: PickupCartRequest;
  }

  /**
   * Parameters for cartPostItem
   */
  export interface CartPostItemParams {

    /**
     * Cart identifier.
     */
    token: string;

    /**
     * Description of an item. The smallest required amount of data is a product code and quantity for a simple product. Configurable products will require an additional `variant_code` or `options` field, but never both.
     */
    content: PutItemToCartRequest;
  }

  /**
   * Parameters for cartPutItems
   */
  export interface CartPutItemsParams {

    /**
     * Cart identifier.
     */
    token: string;

    /**
     * Description of items. The same rules applied to each of the array values as to the previous point.
     */
    content: PutItemsToCartRequest;
  }

  /**
   * Parameters for cartPutItem
   */
  export interface CartPutItemParams {

    /**
     * Cart identifier.
     */
    token: string;

    /**
     * Identifier of a specific item. Can be found in the cart summary.
     */
    identifier: string;
    content: ChangeItemQuantityRequest;
  }

  /**
   * Parameters for cartDeleteItems
   */
  export interface CartDeleteItemsParams {

    /**
     * Cart identifier.
     */
    token: string;

    /**
     * Identifier of a specific item. Can be found in the cart summary.
     */
    identifier: string;
  }

  /**
   * Parameters for estimateShippingCost
   */
  export interface EstimateShippingCostParams {

    /**
     * Cart identifier
     */
    token: string;

    /**
     * Shipping Country
     */
    countryCode: string;

    /**
     * Province to ship to
     */
    provinceCode: string;
  }

  /**
   * Parameters for cartAddCoupon
   */
  export interface CartAddCouponParams {

    /**
     * Cart identifier.
     */
    token: string;
    content: AddCouponRequest;
  }
}

export { CartService }
