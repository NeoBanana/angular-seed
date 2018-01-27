import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Tool } from './tool.model';

@Injectable()
export class DocumentationSandbox {
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
