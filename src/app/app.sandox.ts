import { Injectable } from "@angular/core";
import { Sandbox } from "./shared/sandbox/base.sandbox";
import { Store } from "@ngrx/store";
import * as fromStore from "./shared/store";
import * as languageActions from "./shared/store/actions/language.action";
import { TranslateService } from "@ngx-translate/core";
import { ConfigService } from "./app-config.service";

@Injectable()
export class AppSandbox extends Sandbox {
  constructor(
    protected appState$: Store<fromStore.AppState>,
    private translate: TranslateService,
    private configService: ConfigService
  ) {
    super(appState$);
  }

  /**
   * Sets up default language for the application. Uses browser default language.
   */
  public setupLanguage(): void {
    let localization: any = this.configService.get("localization");
    let languages: Array<string> = localization.languages.map(
      lang => lang.code
    );
    let browserLang: string = this.translate.getBrowserLang();

    this.translate.addLangs(languages);
    this.translate.setDefaultLang(localization.defaultLanguage);

    let selectedLanguage = browserLang.match(/en|pl/)
      ? browserLang
      : localization.defaultLanguage;

    let selectedLang = localization.languages.filter(
      lang => lang.code === selectedLanguage
    )[0];

    this.appState$.dispatch(
      new languageActions.SetLanguageAction(selectedLang)
    );
  }

  /**
   * Returns global notification options
   */
  public getNotificationOptions(): any {
    return this.configService.get("notifications").options;
  }
}
