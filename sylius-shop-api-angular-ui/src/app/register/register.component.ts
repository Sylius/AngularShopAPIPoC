import { Component, OnInit } from '@angular/core';
import { UsersService } from '../api/services';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }


  register(email: string, plainPassword: string, firstName: string, lastName: string) {
    this.authService.register(email, plainPassword, firstName, lastName);
  }

}
