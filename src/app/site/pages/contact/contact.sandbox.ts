import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../shared/store';
import * as layoutActions from '../../../shared/store/actions/layout.action';
@Injectable()
export class ContactSandbox {
  constructor(protected appState$: Store<fromStore.AppState>) {
    this.appState$.dispatch(new layoutActions.ChangePageName('contact'));
  }
  loadCommittees() {
    return [
      {
        region: 'Krajowy Komitet Organizacyjny',
        address: {
          name: 'WMIE Uniwersytet Zielonogorski',
          street: 'ul.Szafrana 4a',
          postcode: '65-516',
          city: 'Zielona Gora'
        },
        moderator: {
          title: 'dr',
          firstname: 'Krystyna',
          surname: 'Białek',
          email: 'mbg@wmie.uz.zgora.pl',
          tel: '',
          fax: '',
          www: ''
        }
      },
      {
        region: 'region dolnośląsko-opolski',
        address: {
          name: 'Fundacja Matematyków Wrocławskich',
          street: 'pl. Grunwaldzki 2/4',
          postcode: '50-384',
          city: 'Wroclaw'
        },
        moderator: {
          title: 'mgr',
          firstname: 'Małgorzata',
          surname: 'Mikołajczyk',
          email: 'mikolaj@math.uni.wroc.pl',
          tel: '071 336 10 85',
          fax: '',
          www: 'www.fmw.uni.wroc.pl/'
        }
      },
      {
        region: 'region dolnośląsko-opolski',
        address: {
          name: 'Fundacja Matematyków Wrocławskich',
          street: 'pl. Grunwaldzki 2/4',
          postcode: '50-384',
          city: 'Wroclaw'
        },
        moderator: {
          title: 'mgr',
          firstname: 'Małgorzata',
          surname: 'Mikołajczyk',
          email: 'mikolaj@math.uni.wroc.pl',
          tel: '071 336 10 85',
          fax: '',
          www: 'www.fmw.uni.wroc.pl/'
        }
      },
      {
        region: 'region dolnośląsko-opolski',
        address: {
          name: 'Fundacja Matematyków Wrocławskich',
          street: 'pl. Grunwaldzki 2/4',
          postcode: '50-384',
          city: 'Wroclaw'
        },
        moderator: {
          title: 'mgr',
          firstname: 'Małgorzata',
          surname: 'Mikołajczyk',
          email: 'mikolaj@math.uni.wroc.pl',
          tel: '071 336 10 85',
          fax: '',
          www: 'www.fmw.uni.wroc.pl/'
        }
      },
      {
        region: 'region dolnośląsko-opolski',
        address: {
          name: 'Fundacja Matematyków Wrocławskich',
          street: 'pl. Grunwaldzki 2/4',
          postcode: '50-384',
          city: 'Wroclaw'
        },
        moderator: {
          title: 'mgr',
          firstname: 'Małgorzata',
          surname: 'Mikołajczyk',
          email: 'mikolaj@math.uni.wroc.pl',
          tel: '071 336 10 85',
          fax: '',
          www: 'www.fmw.uni.wroc.pl/'
        }
      }
    ];
  }
}
