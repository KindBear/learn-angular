import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TokenService {

  private token = new BehaviorSubject<string>('');

  constructor() {
    const existentToken = localStorage.getItem('token');
    if (!this.token.value && existentToken) {
      this.token.next(existentToken);
    }
  }

  public getToken(): string {
    return this.token.value;
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token.next(token);
  }

  public removeToken(): void {
    localStorage.removeItem('token');
    this.token.next('');
  }

  public isLoggedIn(): boolean {
    return Boolean(this.token.value);
  }
}
