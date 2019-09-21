/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://demo.sylius.org/shop-api/{channelCode}';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
