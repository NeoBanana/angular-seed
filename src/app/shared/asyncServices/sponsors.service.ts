import { Injectable } from '@angular/core';
import { ISponsor } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SponsorsService {
  constructor(private http: HttpClient) {}

  getSponsors(): Observable<ISponsor[]> {
    return this.http
      .get<ISponsor[]>(`/api/sponsors`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
