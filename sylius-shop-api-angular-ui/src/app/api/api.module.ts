/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CartService } from './services/cart.service';
import { CheckoutService } from './services/checkout.service';
import { ProductsService } from './services/products.service';
import { TaxonsService } from './services/taxons.service';
import { UsersService } from './services/users.service';
import { OrderService } from './services/order.service';
import { AddressService } from './services/address.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CartService,
    CheckoutService,
    ProductsService,
    TaxonsService,
    UsersService,
    OrderService,
    AddressService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
