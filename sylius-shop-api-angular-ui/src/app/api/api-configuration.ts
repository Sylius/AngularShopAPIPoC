/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://api.demo.sylius.com/shop-api';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
