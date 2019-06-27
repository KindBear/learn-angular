import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  private token: string;

  public getToken(): string {
    if (this.token) {
      return this.token;
    }
    this.token = localStorage.getItem('token');
    return this.token;
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public removeToken(): void {
    localStorage.removeItem('token');
    this.token = '';
  }

}
