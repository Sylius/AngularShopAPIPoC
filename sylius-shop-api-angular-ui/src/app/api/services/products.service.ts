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
import { Product } from '../models/product';

/**
 * Show product catalog and add product reviews.
 */
@Injectable({
  providedIn: 'root',
})
class ProductsService extends __BaseService {
  static readonly productCatalogBySlugPath = '/taxon-products/by-slug/{taxonSlug}';
  static readonly productCatalogPath = '/taxon-products/by-code/{taxonCode}';
  static readonly productDetailsBySlugPath = '/products/by-slug/{slug}';
  static readonly productDetailsPath = '/products/by-code/{code}';
  static readonly productReviewsBySlugPath = '/products/by-slug/{slug}/reviews';
  static readonly productAddReviewBySlugPath = '/products/by-slug/{slug}/reviews';
  static readonly productReviewsPath = '/products/by-code/{code}/reviews';
  static readonly productAddReviewPath = '/products/by-code/{code}/reviews';
  static readonly latestProductsPath = '/product-latest';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This endpoint will return a paginated list of products for given taxon.
   * @param params The `ProductsService.ProductCatalogBySlugParams` containing the following parameters:
   *
   * - `taxonSlug`: Slug of taxonomy for which products should be listed.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * - `page`: Page number.
   *
   * @return Paginated product list.
   */
  productCatalogBySlugResponse(params: ProductsService.ProductCatalogBySlugParams): __Observable<__StrictHttpResponse<ProductsPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/taxon-products/by-slug/${params.taxonSlug}`,
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
   * @param params The `ProductsService.ProductCatalogBySlugParams` containing the following parameters:
   *
   * - `taxonSlug`: Slug of taxonomy for which products should be listed.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * - `page`: Page number.
   *
   * @return Paginated product list.
   */
  productCatalogBySlug(params: ProductsService.ProductCatalogBySlugParams): __Observable<ProductsPage> {
    return this.productCatalogBySlugResponse(params).pipe(
      __map(_r => _r.body as ProductsPage)
    );
  }

  /**
   * This endpoint will return a paginated list of products for given taxon.
   * @param params The `ProductsService.ProductCatalogParams` containing the following parameters:
   *
   * - `taxonCode`: Code of taxonomy for which products should be listed.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * - `page`: Page number.
   *
   * @return Paginated product list.
   */
  productCatalogResponse(params: ProductsService.ProductCatalogParams): __Observable<__StrictHttpResponse<ProductsPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/taxon-products/by-code/${params.taxonCode}`,
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
   * @param params The `ProductsService.ProductCatalogParams` containing the following parameters:
   *
   * - `taxonCode`: Code of taxonomy for which products should be listed.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * - `page`: Page number.
   *
   * @return Paginated product list.
   */
  productCatalog(params: ProductsService.ProductCatalogParams): __Observable<ProductsPage> {
    return this.productCatalogResponse(params).pipe(
      __map(_r => _r.body as ProductsPage)
    );
  }

  /**
   * This endpoint will return a product with the given slug.
   * @param params The `ProductsService.ProductDetailsBySlugParams` containing the following parameters:
   *
   * - `slug`: Slug of expected product.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * @return Show a product with the given slug.
   */
  productDetailsBySlugResponse(params: ProductsService.ProductDetailsBySlugParams): __Observable<__StrictHttpResponse<ProductDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/products/by-slug/${params.slug}`,
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
   * - `locale`: Locale in which products should be shown.
   *
   * @return Show a product with the given slug.
   */
  productDetailsBySlug(params: ProductsService.ProductDetailsBySlugParams): __Observable<ProductDetails> {
    return this.productDetailsBySlugResponse(params).pipe(
      __map(_r => _r.body as ProductDetails)
    );
  }

  /**
   * This endpoint will return a product with the given code.
   * @param params The `ProductsService.ProductDetailsParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * @return Show a product with the given code.
   */
  productDetailsResponse(params: ProductsService.ProductDetailsParams): __Observable<__StrictHttpResponse<ProductDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/products/by-code/${params.code}`,
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
   * @param params The `ProductsService.ProductDetailsParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `locale`: Locale in which products should be shown.
   *
   * @return Show a product with the given code.
   */
  productDetails(params: ProductsService.ProductDetailsParams): __Observable<ProductDetails> {
    return this.productDetailsResponse(params).pipe(
      __map(_r => _r.body as ProductDetails)
    );
  }

  /**
   * This endpoint will return a paginated list of all reviews related to the product identified by slug.
   * @param slug Slug of expected product.
   * @return A paginated list of all reviews related to the product identified by slug.
   */
  productReviewsBySlugResponse(slug: string): __Observable<__StrictHttpResponse<ProductReviewsPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/products/by-slug/${slug}/reviews`,
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
   * @param slug Slug of expected product.
   * @return A paginated list of all reviews related to the product identified by slug.
   */
  productReviewsBySlug(slug: string): __Observable<ProductReviewsPage> {
    return this.productReviewsBySlugResponse(slug).pipe(
      __map(_r => _r.body as ProductReviewsPage)
    );
  }

  /**
   * This endpoint will allow you to add a new review to the product. Remember, that it should be accepted by an administrator before it will be available in the review list.
   * @param params The `ProductsService.ProductAddReviewBySlugParams` containing the following parameters:
   *
   * - `slug`: Slug of expected product.
   *
   * - `content`:
   */
  productAddReviewBySlugResponse(params: ProductsService.ProductAddReviewBySlugParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/products/by-slug/${params.slug}/reviews`,
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
   * @param params The `ProductsService.ProductAddReviewBySlugParams` containing the following parameters:
   *
   * - `slug`: Slug of expected product.
   *
   * - `content`:
   */
  productAddReviewBySlug(params: ProductsService.ProductAddReviewBySlugParams): __Observable<null> {
    return this.productAddReviewBySlugResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will return a paginated list of all reviews related to the product identified by slug.
   * @param code Code of expected product.
   * @return A paginated list of all reviews related to the product identified by slug.
   */
  productReviewsResponse(code: string): __Observable<__StrictHttpResponse<ProductReviewsPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/products/by-code/${code}/reviews`,
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
   * @param code Code of expected product.
   * @return A paginated list of all reviews related to the product identified by slug.
   */
  productReviews(code: string): __Observable<ProductReviewsPage> {
    return this.productReviewsResponse(code).pipe(
      __map(_r => _r.body as ProductReviewsPage)
    );
  }

  /**
   * This endpoint will allow you to add a new review to the product. Remember, that it should be accepted by an administrator before it will be available in the review list.
   * @param params The `ProductsService.ProductAddReviewParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `content`:
   */
  productAddReviewResponse(params: ProductsService.ProductAddReviewParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.content;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/products/by-code/${params.code}/reviews`,
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
   * @param params The `ProductsService.ProductAddReviewParams` containing the following parameters:
   *
   * - `code`: Code of expected product.
   *
   * - `content`:
   */
  productAddReview(params: ProductsService.ProductAddReviewParams): __Observable<null> {
    return this.productAddReviewResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint will return an array of latest products.
   * @param params The `ProductsService.LatestProductsParams` containing the following parameters:
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * @return Array of latest products.
   */
  latestProductsResponse(params: ProductsService.LatestProductsParams): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/product-latest`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Product>>;
      })
    );
  }
  /**
   * This endpoint will return an array of latest products.
   * @param params The `ProductsService.LatestProductsParams` containing the following parameters:
   *
   * - `locale`: Locale in which products should be shown.
   *
   * - `limit`: Number of expected products per page.
   *
   * @return Array of latest products.
   */
  latestProducts(params: ProductsService.LatestProductsParams): __Observable<Array<Product>> {
    return this.latestProductsResponse(params).pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }
}

module ProductsService {

  /**
   * Parameters for productCatalogBySlug
   */
  export interface ProductCatalogBySlugParams {

    /**
     * Slug of taxonomy for which products should be listed.
     */
    taxonSlug: string;

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
   * Parameters for productCatalog
   */
  export interface ProductCatalogParams {

    /**
     * Code of taxonomy for which products should be listed.
     */
    taxonCode: string;

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
     * Locale in which products should be shown.
     */
    locale?: string;
  }

  /**
   * Parameters for productDetails
   */
  export interface ProductDetailsParams {

    /**
     * Code of expected product.
     */
    code: string;

    /**
     * Locale in which products should be shown.
     */
    locale?: string;
  }

  /**
   * Parameters for productAddReviewBySlug
   */
  export interface ProductAddReviewBySlugParams {

    /**
     * Slug of expected product.
     */
    slug: string;
    content: AddReviewRequest;
  }

  /**
   * Parameters for productAddReview
   */
  export interface ProductAddReviewParams {

    /**
     * Code of expected product.
     */
    code: string;
    content: AddReviewRequest;
  }

  /**
   * Parameters for latestProducts
   */
  export interface LatestProductsParams {

    /**
     * Locale in which products should be shown.
     */
    locale?: string;

    /**
     * Number of expected products per page.
     */
    limit?: number;
  }
}

export { ProductsService }
