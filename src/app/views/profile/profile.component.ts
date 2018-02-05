import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import User from '../../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = {
    email: '',
    username: '',
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile()
      .subscribe((res: User) => {
        this.user = res;
      },
      (err) => {
        console.log('error profile', err);
      }
    );
  }

}
