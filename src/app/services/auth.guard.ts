import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { UserType } from '../models/user-type';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  canLoad(route: Route, segment: UrlSegment[]): Observable<boolean> | boolean {
    return this.userService.user.type === route.data.userType;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string) {
    if (this.authService.isLoggedIn.value) {
      return true;
    }

    this.authService.redirectUrl = url;

    this.router.navigate(['/sign-in']);
    return false;
  }
}
