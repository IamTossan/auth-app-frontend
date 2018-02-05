import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import Login from '../../interfaces/login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: Login = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onClickLogin() {
    this.authService.authenticate(this.login)
      .subscribe(d => console.log(d));
  }

}
