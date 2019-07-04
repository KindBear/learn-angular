import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/User.model';

@Injectable()
export class UserResolverService implements Resolve<any> {
  constructor(public userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.userService.getUser();
  }
}
