import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../shared/store';
import * as layoutActions from '../../../shared/store/actions/layout.action';
import { Sandbox } from '../../../shared/sandbox/base.sandbox';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class EditionsSandbox extends Sandbox {
  $participants: Observable<any>;

  constructor(
    protected appState$: Store<fromStore.AppState>,
    protected translate: TranslateService
  ) {
    super(appState$, translate);
    this.setPageName('Edycja XII');
  }
  LoadEdition() {
    this.$participants = of([
      {
        id: 1,
        region: 'lubuskie',
        city: 'lubsko',
        school_id: 1,
        school_type: 'liceum',
        school_name: 'ZSOiE'
      },
      {
        id: 2,
        region: 'lubuskie',
        city: 'lubsko',
        school_id: 2,
        school_type: 'liceum',
        school_name: 'liceum ogolnoksztalczace'
      }
    ]);
  }
}
