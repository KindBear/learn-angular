import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { tap, finalize } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;

  constructor(
    private http: HttpClient,
  ) { }

  getUser(): Observable<any> {
    return this.http.get('/user')
      .pipe(
        tap((response) => {
          this.user = response.data;
        })
      );
  }

  initialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getUser()
        .pipe(
          finalize(() => {
            resolve();
          })
        )
        .subscribe();
    });
  }
}
