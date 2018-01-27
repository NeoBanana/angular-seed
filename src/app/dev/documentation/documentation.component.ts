import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DocumentationSandbox } from './documentation.sandbox';
import { Tool } from './tool.model';

@Component({
  selector: 'dev-documentation',
  template: `
    <app-layout>
    <mat-card>
    <mat-toolbar color="primary">Documentation</mat-toolbar>
      <list-tool [toolList]="list"></list-tool>
      </mat-card>
    </app-layout>
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
