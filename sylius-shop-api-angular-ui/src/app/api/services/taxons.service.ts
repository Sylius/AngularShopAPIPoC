/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Taxon } from '../models/taxon';

/**
 * Show taxon tree
 */
@Injectable({
  providedIn: 'root',
})
class TaxonsService extends __BaseService {
  static readonly taxonTreePath = '/taxons';
  static readonly taxonDetailsPath = '/taxons/{code}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This endpoint will return an array of all available taxon roots with all of its children.
   * @param locale Locale in which taxons should be shown.
   * @return Array of all available taxons.
   */
  taxonTreeResponse(locale?: string): __Observable<__StrictHttpResponse<Array<Taxon>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (locale != null) __params = __params.set('locale', locale.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/taxons`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Taxon>>;
      })
    );
  }
  /**
   * This endpoint will return an array of all available taxon roots with all of its children.
   * @param locale Locale in which taxons should be shown.
   * @return Array of all available taxons.
   */
  taxonTree(locale?: string): __Observable<Array<Taxon>> {
    return this.taxonTreeResponse(locale).pipe(
      __map(_r => _r.body as Array<Taxon>)
    );
  }

  /**
   * This endpoint will return a taxon with given code, children and the root node with direct path to this taxon.
   * @param params The `TaxonsService.TaxonDetailsParams` containing the following parameters:
   *
   * - `code`: Code of expected taxon.
   *
   * - `locale`: Locale in which taxons should be shown.
   *
   * @return Requested taxon with children.
   */
  taxonDetailsResponse(params: TaxonsService.TaxonDetailsParams): __Observable<__StrictHttpResponse<Taxon>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/taxons/${params.code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Taxon>;
      })
    );
  }
  /**
   * This endpoint will return a taxon with given code, children and the root node with direct path to this taxon.
   * @param params The `TaxonsService.TaxonDetailsParams` containing the following parameters:
   *
   * - `code`: Code of expected taxon.
   *
   * - `locale`: Locale in which taxons should be shown.
   *
   * @return Requested taxon with children.
   */
  taxonDetails(params: TaxonsService.TaxonDetailsParams): __Observable<Taxon> {
    return this.taxonDetailsResponse(params).pipe(
      __map(_r => _r.body as Taxon)
    );
  }
}

module TaxonsService {

  /**
   * Parameters for taxonDetails
   */
  export interface TaxonDetailsParams {

    /**
     * Code of expected taxon.
     */
    code: string;

    /**
     * Locale in which taxons should be shown.
     */
    locale?: string;
  }
}

export { TaxonsService }
