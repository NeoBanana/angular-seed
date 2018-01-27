import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { ListToolComponent } from './containers/list-tool.component';
import { ShowToolComponent } from './components/show-tool.component';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { MaterialModule } from '../../shared/modules/material.module';
import { ContainersModule } from '../../shared/containers/containers.module';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ToolsService } from './AsyncServices/tools.service';

import { DocumentationComponent } from './documentation.component';
import { DocumentationSandbox } from './documentation.sandbox';
const Pages = [DocumentationComponent];
const Components = [ListToolComponent];
const Containers = [ShowToolComponent];
const PIPES = [TruncatePipe];
@NgModule({
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    MaterialModule,
    ContainersModule,
    TranslateModule.forChild()
  ],
  declarations: [Pages, Components, Containers, PIPES],
  providers: [ToolsService, DocumentationSandbox]
})
export class DocumentationModule {}
