/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PlacedOrder } from '../models/placed-order';

/**
 * Showing the order information
 */
@Injectable({
  providedIn: 'root',
})
class OrderService extends __BaseService {
  static readonly ordersPath = '/orders';
  static readonly orderPath = '/orders/{tokenValue}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param channelCode The request channel code
   * @return Shows a list of placed orders of the customer
   */
  ordersResponse(channelCode: string): __Observable<__StrictHttpResponse<Array<PlacedOrder>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PlacedOrder>>;
      })
    );
  }
  /**
   * @param channelCode The request channel code
   * @return Shows a list of placed orders of the customer
   */
  orders(channelCode: string): __Observable<Array<PlacedOrder>> {
    return this.ordersResponse(channelCode).pipe(
      __map(_r => _r.body as Array<PlacedOrder>)
    );
  }

  /**
   * @param params The `OrderService.OrderParams` containing the following parameters:
   *
   * - `channelCode`: The request channel code
   *
   * - `tokenValue`: Order token.
   *
   * @return Shows details of specific customer's order with given tokenValue
   */
  orderResponse(params: OrderService.OrderParams): __Observable<__StrictHttpResponse<PlacedOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/orders/${params.tokenValue}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PlacedOrder>;
      })
    );
  }
  /**
   * @param params The `OrderService.OrderParams` containing the following parameters:
   *
   * - `channelCode`: The request channel code
   *
   * - `tokenValue`: Order token.
   *
   * @return Shows details of specific customer's order with given tokenValue
   */
  order(params: OrderService.OrderParams): __Observable<PlacedOrder> {
    return this.orderResponse(params).pipe(
      __map(_r => _r.body as PlacedOrder)
    );
  }
}

module OrderService {

  /**
   * Parameters for order
   */
  export interface OrderParams {

    /**
     * The request channel code
     */
    channelCode: string;

    /**
     * Order token.
     */
    tokenValue: string;
  }
}

export { OrderService }
