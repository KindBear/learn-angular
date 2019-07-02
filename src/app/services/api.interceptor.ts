import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Accept': 'application/json, text/plain, */*'
    };

    if (this.tokenService.getToken()) {
      headersConfig['Authorization'] = `Bearer ${this.tokenService.getToken()}`;
    }

    const request = req.clone({
      url: `${environment.httpUrl}${req.url}`,
      setHeaders: headersConfig
    });

    return next.handle(request);
  }
}
