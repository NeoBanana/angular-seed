import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../store';
import * as sponsorsActions from '../actions/sponsors.action';
import * as fromServices from '../../asyncServices/sponsors.service';

@Injectable()
export class SponsorsEffects {
  constructor(
    private actions$: Actions,
    private SponsorService: fromServices.SponsorsService
  ) {}

  @Effect()
  loadSponsors$ = this.actions$
    .ofType(sponsorsActions.ActionTypes.LOAD_SPONSORS)
    .pipe(
      switchMap(() => {
        return this.SponsorService.getSponsors().pipe(
          map(
            sponsors => new sponsorsActions.LoadSponsorsSuccessAction(sponsors)
          ),
          catchError(error =>
            of(new sponsorsActions.LoadSponsorsFailAction(error))
          )
        );
      })
    );
}
