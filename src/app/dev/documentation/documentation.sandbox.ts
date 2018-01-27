import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tool } from './tool.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../shared/store';
import * as layoutActions from '../../shared/store/actions/layout.action';
@Injectable()
export class DocumentationSandbox {
  constructor(protected appState$: Store<fromStore.AppState>) {
    this.appState$.dispatch(new layoutActions.ChangePageName('Documentation'));
  }

  public loadTools(): Tool[] {
    const list = [
      {
        title: 'Truncate Pipe',
        body: `

    <b>Usage:</b><br />
    {{ someText | trucate : characteLimit : completeWords : sufix }}<br /> <hr>
    <b> Defaults:</b><br />
    characterLimit: 12<br />
    completeWords: false<br />
    sufix: "..."<br /> <hr>
    <b>Example:</b><br />
    {{ someText } truncate : 128 : true }
    <hr>

    `
      }
    ];
    return list;
  }
}
