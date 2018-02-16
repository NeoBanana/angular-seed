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
import { CommitteeInfoComponent } from './components/committee-info/committee-info.component';
import { CommitteeListComponent } from './containers/committee-list/committee-list.component';
import { SearchComponent } from './components/search/search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { InfoGeneralComponent } from './pages/info-general/info-general.component';
import { InfoRulesComponent } from './pages/info-rules/info-rules.component';
import { ParticipantListComponent } from './containers/participant-list/participant-list.component';
import { ParticipantInfoComponent } from './components/participant-info/participant-info.component';
import { EditionResultComponent } from './components/edition-result/edition-result.component';
import { EditionStatisticComponent } from './components/edition-statistic/edition-statistic.component';

import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminDaneKomitetuComponent } from './pages/admin-dane-komitetu/admin-dane-komitetu.component';
import { SchoolAddParticipentComponent } from './pages/school-add-participent/school-add-participent.component';
import { SchoolSettingComponent } from './pages/school-setting/school-setting.component';
import { AuthModule } from '../Auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
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
    InfoGeneralComponent,
    InfoRulesComponent,
    CommitteeInfoComponent,
    CommitteeListComponent,
    SearchComponent,
    SearchPipe,
    InfoGeneralComponent,
    InfoRulesComponent,
    ParticipantListComponent,
    ParticipantInfoComponent,
    EditionResultComponent,
    EditionStatisticComponent,

    AdminPanelComponent,
    AdminDaneKomitetuComponent,
    SchoolAddParticipentComponent,
    SchoolSettingComponent
  ],
  providers: []
})
export class SiteModule {}
