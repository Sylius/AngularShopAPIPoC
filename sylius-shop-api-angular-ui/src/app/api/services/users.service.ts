/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RequestPasswordResetting } from '../models/request-password-resetting';
import { RegisterRequest } from '../models/register-request';
import { LoggedInCustomerDetails } from '../models/logged-in-customer-details';
import { UpdateUserRequest } from '../models/update-user-request';

/**
 * All actions related to user functionality.
 */
@Injectable({
  providedIn: 'root',
})
class UsersService extends __BaseService {
  static readonly requestPasswordResetPath = '/request-password-reset';
  static readonly registerUserPath = '/register';
  static readonly mePath = '/me';
  static readonly updateUserPath = '/me';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Email with reset password path will be sent to user. Default path for password resetting is `/password-reset/{token}`. To change it, you need to override template `@SyliusShopApi\Email\passwordReset.html.twig`.
   * @param email Email of user which want to reset password.
   */
  requestPasswordResetResponse(email: RequestPasswordResetting): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = email;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/request-password-reset`,
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
   * Email with reset password path will be sent to user. Default path for password resetting is `/password-reset/{token}`. To change it, you need to override template `@SyliusShopApi\Email\passwordReset.html.twig`.
   * @param email Email of user which want to reset password.
   */
  requestPasswordReset(email: RequestPasswordResetting): __Observable<null> {
    return this.requestPasswordResetResponse(email).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This creates a new user that can log in the shop
   * @param content undefined
   */
  registerUserResponse(content: RegisterRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/register`,
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
   * This creates a new user that can log in the shop
   * @param content undefined
   */
  registerUser(content: RegisterRequest): __Observable<null> {
    return this.registerUserResponse(content).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return Customer details returned.
   */
  meResponse(): __Observable<__StrictHttpResponse<LoggedInCustomerDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoggedInCustomerDetails>;
      })
    );
  }
  /**
   * @return Customer details returned.
   */
  me(): __Observable<LoggedInCustomerDetails> {
    return this.meResponse().pipe(
      __map(_r => _r.body as LoggedInCustomerDetails)
    );
  }

  /**
   * @param content undefined
   * @return User successfully updated.
   */
  updateUserResponse(content: UpdateUserRequest): __Observable<__StrictHttpResponse<LoggedInCustomerDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = content;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoggedInCustomerDetails>;
      })
    );
  }
  /**
   * @param content undefined
   * @return User successfully updated.
   */
  updateUser(content: UpdateUserRequest): __Observable<LoggedInCustomerDetails> {
    return this.updateUserResponse(content).pipe(
      __map(_r => _r.body as LoggedInCustomerDetails)
    );
  }
}

module UsersService {
}

export { UsersService }
