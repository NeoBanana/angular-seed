import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Tool } from '../tool.model';

@Injectable()
export class ToolsService {
  constructor(private http: HttpClient) {}

  getTools(): Observable<Tool[]> {
    return this.http
      .get<Tool[]>(`/api/tools`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
