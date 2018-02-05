import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import AuthResponse from '../interfaces/authResponse';
import Login from '../interfaces/login';

const httpOpts = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  authenticate(login: Login) {
    return this.http.post('http://localhost:3000/api/users/auth', login, httpOpts)
      .pipe(
        tap((res: AuthResponse) => {
          if (res.success) {
            httpOpts.headers = httpOpts.headers.set(
              'Authorization', res.token
            );
          }
        }
      ));
  }

  getProfile() {
    return this.http.get('http://localhost:3000/api/users/profile', httpOpts)
      .pipe(
        catchError((err) => {
          return this.router.navigate(['/']);
        })
      );
  }

}
