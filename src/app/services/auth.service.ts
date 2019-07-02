import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { tap, map } from 'rxjs/operators';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = '';

  isLoggedIn = new BehaviorSubject<boolean>(this.tokenService.isLoggedIn());
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router
  ) { }

  public signIn(data): Observable<any> {
    return this.http.post('/login', data)
      .pipe(
        tap(this.login)
      );
  }

  public signUp(data): Observable<User> {
    return this.http.post<User>('/users', { ...data, type: 'player' });
  }

  public activateUser(token): Observable<any> {
    return this.http.post(`/activation/${token}`, { token })
      .pipe(
        map((res: { data: object }) => res.data),
        tap(this.login)
      );
  }

  public logout() {
    this.isLoggedIn.next(false);
    this.tokenService.removeToken();
  }

  private login = (res) => {
    if (res.access_token) {
      this.tokenService.setToken(res.access_token);
      this.userService.getUser().subscribe();
      this.isLoggedIn.next(true);
      if (this.redirectUrl) {
        this.router.navigate([this.redirectUrl]);
      } else {
        this.router.navigate(['/user']);
      }
    }
  }
}
