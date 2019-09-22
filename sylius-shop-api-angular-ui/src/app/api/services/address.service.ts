/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LoggedInCustomerAddressBook } from '../models/logged-in-customer-address-book';
import { LoggedInCustomerAddressBookAddress } from '../models/logged-in-customer-address-book-address';

/**
 * All functions related to the Sylius Customer Address Book
 */
@Injectable({
  providedIn: 'root',
})
class AddressService extends __BaseService {
  static readonly addressBookPath = '/address-book';
  static readonly createAddressPath = '/address-book';
  static readonly updateAddressBookPath = '/address-book/{id}';
  static readonly deleteAddressPath = '/address-book/{id}';
  static readonly updateDefaultAddressPath = '/address-book/{id}/default';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Successfully fetched Address Book
   */
  addressBookResponse(): __Observable<__StrictHttpResponse<LoggedInCustomerAddressBook>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/address-book`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoggedInCustomerAddressBook>;
      })
    );
  }
  /**
   * @return Successfully fetched Address Book
   */
  addressBook(): __Observable<LoggedInCustomerAddressBook> {
    return this.addressBookResponse().pipe(
      __map(_r => _r.body as LoggedInCustomerAddressBook)
    );
  }

  /**
   * @param content undefined
   * @return Successfully created the address
   */
  createAddressResponse(content: LoggedInCustomerAddressBookAddress): __Observable<__StrictHttpResponse<LoggedInCustomerAddressBookAddress>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/address-book`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoggedInCustomerAddressBookAddress>;
      })
    );
  }
  /**
   * @param content undefined
   * @return Successfully created the address
   */
  createAddress(content: LoggedInCustomerAddressBookAddress): __Observable<LoggedInCustomerAddressBookAddress> {
    return this.createAddressResponse(content).pipe(
      __map(_r => _r.body as LoggedInCustomerAddressBookAddress)
    );
  }

  /**
   * @param params The `AddressService.UpdateAddressBookParams` containing the following parameters:
   *
   * - `id`: Id of the address to update
   *
   * - `content`:
   *
   * @return Successfully updated the address
   */
  updateAddressBookResponse(params: AddressService.UpdateAddressBookParams): __Observable<__StrictHttpResponse<LoggedInCustomerAddressBookAddress>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/address-book/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoggedInCustomerAddressBookAddress>;
      })
    );
  }
  /**
   * @param params The `AddressService.UpdateAddressBookParams` containing the following parameters:
   *
   * - `id`: Id of the address to update
   *
   * - `content`:
   *
   * @return Successfully updated the address
   */
  updateAddressBook(params: AddressService.UpdateAddressBookParams): __Observable<LoggedInCustomerAddressBookAddress> {
    return this.updateAddressBookResponse(params).pipe(
      __map(_r => _r.body as LoggedInCustomerAddressBookAddress)
    );
  }

  /**
   * @param id Id of the address to update
   */
  deleteAddressResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/address-book/${id}`,
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
   * @param id Id of the address to update
   */
  deleteAddress(id: number): __Observable<null> {
    return this.deleteAddressResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id Id of the address to be the default address
   */
  updateDefaultAddressResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/address-book/${id}/default`,
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
   * @param id Id of the address to be the default address
   */
  updateDefaultAddress(id: number): __Observable<null> {
    return this.updateDefaultAddressResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AddressService {

  /**
   * Parameters for updateAddressBook
   */
  export interface UpdateAddressBookParams {

    /**
     * Id of the address to update
     */
    id: number;
    content: LoggedInCustomerAddressBookAddress;
  }
}

export { AddressService }
