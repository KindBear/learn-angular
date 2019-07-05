import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pagination } from '../models/Pagination.model';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  public sports = new BehaviorSubject<Pagination>(null);

  constructor(
    private http: HttpClient,
  ) { }

  getSports(params?): Observable<Pagination> {
    return this.http.get<Pagination>('/sports', { params })
      .pipe(
        tap((response) => {
          this.sports.next(response);
        })
      );
  }
}
