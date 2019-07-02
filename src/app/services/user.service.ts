import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<any> {
    return this.http.get('/user')
      .pipe(
        tap((response) => {
          this.user = response.data;
        })
      );
  }
}
