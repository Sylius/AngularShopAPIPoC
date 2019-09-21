import { Component, OnInit } from '@angular/core';
import { UsersService } from '../api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
  }

  login(userName: string, password: string) {
    // this.usersService.loginUser({
    //   email: userName,
    //   password
    // }).subscribe(
    //   (result) => {
    //     console.log(result);
    //   }
    // );
  }
}
