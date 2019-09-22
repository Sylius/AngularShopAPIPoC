import { Injectable } from '@angular/core';
import { UsersService } from '../api/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;
  public get token(): string {
    this._token = localStorage.getItem('TOKEN');
    return this._token;
  }
  public set token(value: string) {
    console.log(value);
    localStorage.setItem('TOKEN', value);
    this._token = value;
  }


  constructor(
    private usersService: UsersService,
  ) { }

  register(email: string, plainPassword: string, firstName: string, lastName: string) {
    this.usersService.registerUser({
      channel: 'FASHION_WEB',
      email,
      firstName,
      lastName,
      plainPassword
    }).subscribe(
      () => {
        console.log('succcess');
        this.login(email, plainPassword);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  login(userName: string, password: string) {
    this.usersService.loginUser({
      email: userName,
      password,
    }).subscribe(
      (result) => {
        console.log(result);
        this.token  = result.token;
      },
      (error) => {
        this.logout();
      }
    );
  }

  logout() {
    this.token = null;
  }
}
