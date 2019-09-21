/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductsPage } from '../models/products-page';
import { ProductDetails } from '../models/product-details';
import { ProductReviewsPage } from '../models/product-reviews-page';
import { AddReviewRequest } from '../models/add-review-request';

/**
 * Show product catalog and add product reviews.
 */
@Injectable({
  providedIn: 'root',
})
class ProductsService extends __BaseService {
  static readonly productCatalogTaxonBySlugPath = '/taxon-products-by-slug/{slug}';
  static readonly productCatalogTaxonByCodePath = '/taxon-products/{code}';
  static readonly productDetailsBySlugPath = '/products-by-slug/{slug}';
  static readonly productDetailsByCodePath = '/products/{code}';
  static readonly productReviewsBySlugPath = '/product-reviews-by-slug/{slug}';
  static readonly productAddReviewByslugPath = '/product-reviews-by-slug/{slug}';
  static readonly productReviewsByCodePath = '/product/{code}/reviews';
  static readonly productAddReviewByCodePath = '/product/{code}/reviews';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This endpoint will return a paginated list of products for given taxon.
   * @param params The `ProductsService.ProductCatalogTaxonBySlugParams` containing the following parameters:
   *
   * - `slug`: Slug of taxonomy for which products should be listed.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * - `page`: Page number.
   *
   * @return Paginated product list.
   */
  productCatalogTaxonBySlugResponse(params: ProductsService.ProductCatalogTaxonBySlugParams): __Observable<__StrictHttpResponse<ProductsPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.channel != null) __params = __params.set('channel', params.channel.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/taxon-products/by-slug/${params.slug}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductsPage>;
      })
    );
  }
  /**
   * This endpoint will return a paginated list of products for given taxon.
   * @param params The `ProductsService.ProductCatalogTaxonBySlugParams` containing the following parameters:
   *
   * - `slug`: Slug of taxonomy for which products should be listed.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * - `page`: Page number.
   *
   * @return Paginated product list.
   */
  productCatalogTaxonBySlug(params: ProductsService.ProductCatalogTaxonBySlugParams): __Observable<ProductsPage> {
    return this.productCatalogTaxonBySlugResponse(params).pipe(
      __map(_r => _r.body as ProductsPage)
    );
  }

  /**
   * This endpoint will return a paginated list of products for given taxon.
   * @param params The `ProductsService.ProductCatalogTaxonByCodeParams` containing the following parameters:
   *
   * - `code`: Code of taxonomy for which products should be listed.
   *
   * - `channel`: Channel code from which products should be gathered.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * - `page`: Page number.
   *
   * @return Paginated product list.
   */
  productCatalogTaxonByCodeResponse(params: ProductsService.ProductCatalogTaxonByCodeParams): __Observable<__StrictHttpResponse<ProductsPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.channel != null) __params = __params.set('channel', params.channel.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/taxon-products/${params.code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductsPage>;
      })
    );
  }
  /**
   * This endpoint will return a paginated list of products for given taxon.
   * @param params The `ProductsService.ProductCatalogTaxonByCodeParams` containing the following parameters:
   *
   * - `code`: Code of taxonomy for which products should be listed.
   *
   * - `channel`: Channel code from which products should be gathered.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * - `page`: Page number.
   *
   * @return Paginated product list.
   */
  productCatalogTaxonByCode(params: ProductsService.ProductCatalogTaxonByCodeParams): __Observable<ProductsPage> {
    return this.productCatalogTaxonByCodeResponse(params).pipe(
      __map(_r => _r.body as ProductsPage)
    );
  }

  /**
   * This endpoint will return a product with the given slug.
   * @param params The `ProductsService.ProductDetailsBySlugParams` containing the following parameters:
   *
   * - `slug`: Slug of expected product.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * @return Product details returned
   */
  productDetailsBySlugResponse(params: ProductsService.ProductDetailsBySlugParams): __Observable<__StrictHttpResponse<ProductDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.channel != null) __params = __params.set('channel', params.channel.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/products-by-slug/${params.slug}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDetails>;
      })
    );
  }
  /**
   * This endpoint will return a product with the given slug.
   * @param params The `ProductsService.ProductDetailsBySlugParams` containing the following parameters:
   *
   * - `slug`: Slug of expected product.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * @return Product details returned
   */
  productDetailsBySlug(params: ProductsService.ProductDetailsBySlugParams): __Observable<ProductDetails> {
    return this.productDetailsBySlugResponse(params).pipe(
      __map(_r => _r.body as ProductDetails)
    );
  }

  /**
   * This endpoint will return a product with the given code.
   * @param params The `ProductsService.ProductDetailsByCodeParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * @return Product details returned
   */
  productDetailsByCodeResponse(params: ProductsService.ProductDetailsByCodeParams): __Observable<__StrictHttpResponse<ProductDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.channel != null) __params = __params.set('channel', params.channel.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/products/${params.code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDetails>;
      })
    );
  }
  /**
   * This endpoint will return a product with the given code.
   * @param params The `ProductsService.ProductDetailsByCodeParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * @return Product details returned
   */
  productDetailsByCode(params: ProductsService.ProductDetailsByCodeParams): __Observable<ProductDetails> {
    return this.productDetailsByCodeResponse(params).pipe(
      __map(_r => _r.body as ProductDetails)
    );
  }

  /**
   * This endpoint will return a paginated list of all reviews related to the product identified by slug.
   * @param params The `ProductsService.ProductReviewsBySlugParams` containing the following parameters:
   *
   * - `slug`: Slug of expected product.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * @return Product reviews returned
   */
  productReviewsBySlugResponse(params: ProductsService.ProductReviewsBySlugParams): __Observable<__StrictHttpResponse<ProductReviewsPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.channel != null) __params = __params.set('channel', params.channel.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/product-reviews-by-slug/${params.slug}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductReviewsPage>;
      })
    );
  }
  /**
   * This endpoint will return a paginated list of all reviews related to the product identified by slug.
   * @param params The `ProductsService.ProductReviewsBySlugParams` containing the following parameters:
   *
   * - `slug`: Slug of expected product.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * @return Product reviews returned
   */
  productReviewsBySlug(params: ProductsService.ProductReviewsBySlugParams): __Observable<ProductReviewsPage> {
    return this.productReviewsBySlugResponse(params).pipe(
      __map(_r => _r.body as ProductReviewsPage)
    );
  }

  /**
   * This endpoint will allow you to add a new review to the product. Remember, that it should be accepted by an administrator before it will be available in the review list.
   * @param params The `ProductsService.ProductAddReviewByslugParams` containing the following parameters:
   *
   * - `slug`: Slug of expected product.
   *
   * - `content`:
   */
  productAddReviewByslugResponse(params: ProductsService.ProductAddReviewByslugParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/product-reviews-by-slug/${params.slug}`,
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
   * This endpoint will allow you to add a new review to the product. Remember, that it should be accepted by an administrator before it will be available in the review list.
   * @param params The `ProductsService.ProductAddReviewByslugParams` containing the following parameters:
   *
   * - `slug`: Slug of expected product.
   *
   * - `content`:
   */
  productAddReviewByslug(params: ProductsService.ProductAddReviewByslugParams): __Observable<null> {
    return this.productAddReviewByslugResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will return a paginated list of all reviews related to the product identified by slug.
   * @param params The `ProductsService.ProductReviewsByCodeParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * @return Product reviews returned
   */
  productReviewsByCodeResponse(params: ProductsService.ProductReviewsByCodeParams): __Observable<__StrictHttpResponse<ProductReviewsPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.channel != null) __params = __params.set('channel', params.channel.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/product/${params.code}/reviews`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductReviewsPage>;
      })
    );
  }
  /**
   * This endpoint will return a paginated list of all reviews related to the product identified by slug.
   * @param params The `ProductsService.ProductReviewsByCodeParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `channel`: Channel from which products should be gathered.
   *
   * @return Product reviews returned
   */
  productReviewsByCode(params: ProductsService.ProductReviewsByCodeParams): __Observable<ProductReviewsPage> {
    return this.productReviewsByCodeResponse(params).pipe(
      __map(_r => _r.body as ProductReviewsPage)
    );
  }

  /**
   * This endpoint will allow you to add a new review to the product. Remember, that it should be accepted by an administrator before it will be available in the review list.
   * @param params The `ProductsService.ProductAddReviewByCodeParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `content`:
   */
  productAddReviewByCodeResponse(params: ProductsService.ProductAddReviewByCodeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/product/${params.code}/reviews`,
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
   * This endpoint will allow you to add a new review to the product. Remember, that it should be accepted by an administrator before it will be available in the review list.
   * @param params The `ProductsService.ProductAddReviewByCodeParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `content`:
   */
  productAddReviewByCode(params: ProductsService.ProductAddReviewByCodeParams): __Observable<null> {
    return this.productAddReviewByCodeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ProductsService {

  /**
   * Parameters for productCatalogTaxonBySlug
   */
  export interface ProductCatalogTaxonBySlugParams {

    /**
     * Slug of taxonomy for which products should be listed.
     */
    slug: string;

    /**
     * Channel from which products should be gathered.
     */
    channel: string;

    /**
     * Locale in which products should be shown.
     */
    locale?: string;

    /**
     * Number of expected products per page.
     */
    limit?: number;

    /**
     * Page number.
     */
    page?: number;
  }

  /**
   * Parameters for productCatalogTaxonByCode
   */
  export interface ProductCatalogTaxonByCodeParams {

    /**
     * Code of taxonomy for which products should be listed.
     */
    code: string;

    /**
     * Channel code from which products should be gathered.
     */
    channel: string;

    /**
     * Locale in which products should be shown.
     */
    locale?: string;

    /**
     * Number of expected products per page.
     */
    limit?: number;

    /**
     * Page number.
     */
    page?: number;
  }

  /**
   * Parameters for productDetailsBySlug
   */
  export interface ProductDetailsBySlugParams {

    /**
     * Slug of expected product.
     */
    slug: string;

    /**
     * Channel from which products should be gathered.
     */
    channel: string;

    /**
     * Locale in which products should be shown.
     */
    locale?: string;
  }

  /**
   * Parameters for productDetailsByCode
   */
  export interface ProductDetailsByCodeParams {

    /**
     * Code of expected product.
     */
    code: string;

    /**
     * Channel from which products should be gathered.
     */
    channel: string;

    /**
     * Locale in which products should be shown.
     */
    locale?: string;
  }

  /**
   * Parameters for productReviewsBySlug
   */
  export interface ProductReviewsBySlugParams {

    /**
     * Slug of expected product.
     */
    slug: string;

    /**
     * Channel from which products should be gathered.
     */
    channel: string;
  }

  /**
   * Parameters for productAddReviewByslug
   */
  export interface ProductAddReviewByslugParams {

    /**
     * Slug of expected product.
     */
    slug: string;
    content: AddReviewRequest;
  }

  /**
   * Parameters for productReviewsByCode
   */
  export interface ProductReviewsByCodeParams {

    /**
     * Code of expected product.
     */
    code: string;

    /**
     * Channel from which products should be gathered.
     */
    channel: string;
  }

  /**
   * Parameters for productAddReviewByCode
   */
  export interface ProductAddReviewByCodeParams {

    /**
     * Code of expected product.
     */
    code: string;
    content: AddReviewRequest;
  }
}

export { ProductsService }
