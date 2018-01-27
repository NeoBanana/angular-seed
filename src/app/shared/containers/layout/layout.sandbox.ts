import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as languageActions from '../../store/actions/language.action';
import * as layoutActions from '../../store/actions/layout.action';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LayoutSandbox {
  public $selectedLang = this.appState$.select(fromStore.getSelectedLanguage);
  public $availableLanguages = this.appState$.select(
    fromStore.getAvailableLanguages
  );
  public $showSidenav = this.appState$.select(fromStore.getShowSidenav);
  constructor(
    protected appState$: Store<fromStore.AppState>,
    private translateService: TranslateService,
    private router: Router
  ) {}

  public selectLanguage(lang: any): void {
    this.appState$.dispatch(new languageActions.SetLanguageAction(lang));
    this.appState$.dispatch(new languageActions.SetCultureAction(lang.culture));
  }
  public toggleSidenav(opened: boolean) {
    this.appState$.dispatch(new layoutActions.ToggleSidenav(opened));
  }
  public loadSponsors(): Array<any> {
    return [
      {
        name: 'Polskie Towarzystwo Matematyczne',
        href: 'http://www.ptm.org.pl/',
        src: 'http://www.mbg.uz.zgora.pl/ptm-logo-150.png'
      },
      {
        name: 'Matematyka Bez Granic',
        href: 'http://www.mbg.uz.zgora.pl',
        src: 'http://www.mbg.uz.zgora.pl/logo.php'
      },
      {
        name: 'Polskie Towarzystwo Matematyczne',
        href: 'http://www.ptm.org.pl/',
        src:
          'https://hdwallsource.com/img/2014/7/large-40566-41516-hd-wallpapers.jpg'
      },
      {
        name: 'Polskie Towarzystwo Matematyczne',
        href: 'http://www.ptm.org.pl/',
        src: 'http://www.mbg.uz.zgora.pl/ptm-logo-150.png'
      },
      {
        name: 'Polskie Towarzystwo Matematyczne',
        href: 'http://www.ptm.org.pl/',
        src: 'http://www.mbg.uz.zgora.pl/ptm-logo-150.png'
      }
    ];
  }
}
