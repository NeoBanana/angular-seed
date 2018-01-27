import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DocumentationSandbox } from './documentation.sandbox';
import { Tool } from './tool.model';

@Component({
  selector: 'dev-documentation',
  template: `

      <list-tool [toolList]="list"></list-tool>

  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationComponent {
  list: Tool[];

  constructor(
    private router: Router,
    public documentationSandbox: DocumentationSandbox
  ) {
    this.list = documentationSandbox.loadTools();
  }
}
