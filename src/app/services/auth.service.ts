import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = 'http://rhino-api.local';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  public signIn(data): Observable<any> {
    return this.http.post(`${this.host}/v2/login`, data)
      .pipe(
        tap((res: { access_token: string }) => {
          if (res.access_token) {
            this.tokenService.setToken(res.access_token);
          }
        })
      );
  }

  public signUp(data): Observable<any> {
    return this.http.post(`${this.host}/v2/users`, { ...data, type: 'player' });
  }
}
