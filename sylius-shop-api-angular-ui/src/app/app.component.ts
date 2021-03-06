import { Component, OnInit } from '@angular/core';
import { UsersService, ProductsService } from './api/services';
import { Observable } from 'rxjs';
import { Product } from './api/models';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sylius-shop-api-angular-ui';

  constructor(
    public authService: AuthService,
  ) {

  }
}
