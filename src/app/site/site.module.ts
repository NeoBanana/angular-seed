import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../shared/modules/material.module';
import { ContainersModule } from '../shared/containers/containers.module';
import { ComponentsModule } from '../shared/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './pages/contact/contact.component';
import { EditionsComponent } from './pages/editions/editions.component';
import { FormComponent } from './pages/form/form.component';
import { InfoComponent } from './pages/info/info.component';
import { CommitteeInfoComponent } from './components/committee-info/committee-info.component';
import { CommitteeListComponent } from './containers/committee-list/committee-list.component';
import { SearchComponent } from './components/search/search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../shared/pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ContainersModule,
    ComponentsModule,
    FlexLayoutModule,
    TranslateModule.forChild(),
    SiteRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    EditionsComponent,
    FormComponent,
    InfoComponent,
    CommitteeInfoComponent,
    CommitteeListComponent,
    SearchComponent,
    SearchPipe
  ],
  providers: []
})
export class SiteModule {}
