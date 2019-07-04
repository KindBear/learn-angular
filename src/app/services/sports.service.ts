import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, finalize, map } from 'rxjs/operators';
import { Sport } from '../models/Sport.model';
import { Pagination } from '../models/Pagination.model';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  public sports = new BehaviorSubject<Sport[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getSports(): Observable<Pagination> {
    return this.http.get<Pagination>('/sports')
      .pipe(
        map((res) => res.data),
        tap((response) => {
          this.sports.next(response);
        })
      );
  }
}
