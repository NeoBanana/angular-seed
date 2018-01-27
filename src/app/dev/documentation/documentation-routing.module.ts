import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListToolComponent } from './containers/list-tool.component';
import { DocumentationComponent } from './documentation.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {}
