import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { ConfigService } from '../../app-config.service';
import { IComittee } from '../models/models';
@Injectable()
export class CommitteesService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  getCommittees(): Observable<IComittee[]> {
    return this.http
      .get<IComittee[]>(this.config.get('api').baseUrl + `/committees`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createCommittee(payload: IComittee): Observable<IComittee> {
    return this.http
      .post<IComittee>(this.config.get('api').baseUrl + `/committees`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateCommittee(payload: IComittee): Observable<IComittee> {
    return this.http
      .put<IComittee>(
        this.config.get('api').baseUrl + `/committees/${payload.id}`,
        payload
      )
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeCommittee(payload: IComittee): Observable<IComittee> {
    return this.http
      .delete<any>(this.config.get('api').baseUrl + `/committees/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
