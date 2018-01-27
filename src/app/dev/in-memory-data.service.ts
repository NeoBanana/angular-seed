import { InMemoryDbService } from 'angular-in-memory-web-api';
/**
 * This is an example of a Hero-oriented InMemoryDbService.
 *
 * For demonstration purposes, it can return the database
 * synchronously as an object (default),
 * as an observable, or as a promise.
 *
 * Add the following line to `AppModule.imports`
 *   InMemoryWebApiModule.forRoot(HeroInMemDataService) // or HeroInMemDataOverrideService
 */
import { Injectable } from '@angular/core';

// tslint:disable:no-unused-variable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
// tslint:enable:no-unused-variable
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tools = [
      {
        id: 1,
        title: 'admin',
        body: 'admin'
      }
    ];
    const db = { tools };

    return db;
  }
}
