/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RequestPasswordResetting } from '../models/request-password-resetting';
import { PasswordResetRequest } from '../models/password-reset-request';
import { RegisterRequest } from '../models/register-request';
import { LoginSuccess } from '../models/login-success';
import { LoginRequest } from '../models/login-request';
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
  static readonly passwordResetPath = '/password-reset/{token}';
  static readonly registerUserPath = '/register';
  static readonly loginUserPath = '/login';
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
   * @param content undefined
   */
  requestPasswordResetResponse(content: RequestPasswordResetting): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = content;
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
   * @param content undefined
   */
  requestPasswordReset(content: RequestPasswordResetting): __Observable<null> {
    return this.requestPasswordResetResponse(content).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint resets the user password.
   * @param params The `UsersService.PasswordResetParams` containing the following parameters:
   *
   * - `content`:
   *
   * - `token`: Password reset token.
   */
  passwordResetResponse(params: UsersService.PasswordResetParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.content;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/password-reset/${params.token}`,
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
   * This endpoint resets the user password.
   * @param params The `UsersService.PasswordResetParams` containing the following parameters:
   *
   * - `content`:
   *
   * - `token`: Password reset token.
   */
  passwordReset(params: UsersService.PasswordResetParams): __Observable<null> {
    return this.passwordResetResponse(params).pipe(
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
   * This route is needed to log the user in and get an access token.
   * @param content undefined
   * @return User was logged in
   */
  loginUserResponse(content: LoginRequest): __Observable<__StrictHttpResponse<LoginSuccess>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoginSuccess>;
      })
    );
  }
  /**
   * This route is needed to log the user in and get an access token.
   * @param content undefined
   * @return User was logged in
   */
  loginUser(content: LoginRequest): __Observable<LoginSuccess> {
    return this.loginUserResponse(content).pipe(
      __map(_r => _r.body as LoginSuccess)
    );
  }

  /**
   * @return Provides currently logged in user details.
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
   * @return Provides currently logged in user details.
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

  /**
   * Parameters for passwordReset
   */
  export interface PasswordResetParams {
    content: PasswordResetRequest;

    /**
     * Password reset token.
     */
    token: string;
  }
}

export { UsersService }
