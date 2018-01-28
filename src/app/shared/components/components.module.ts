import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { PipesModule } from "../pipes";
import { TranslateModule } from '@ngx-translate/core';

// import { SpinnerComponent } from "./spinner/spinner.component";
import { NavigationComponent } from './navigation/navigation.component';
// import { ProfileActionBarComponent } from "./profileActionBar/profileActionBar.component";
import { HeaderComponent } from './header/header.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MaterialModule } from '../modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalendarComponent } from './calendar/calendar.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavNavigationComponent } from './sidenav-navigation/sidenav-navigation.component';
import { LoginComponent } from './login/login.component';

// import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";

export const COMPONENTS = [
  // SpinnerComponent,
  SidenavNavigationComponent,
  NavigationComponent,
  // ProfileActionBarComponent,
  HeaderComponent,
  FooterComponent,

  LanguageSelectorComponent,
  CalendarComponent,
  SponsorsComponent,
  LoginComponent

  // PageNotFoundComponent
];

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    MaterialModule,
    FlexLayoutModule
    // PipesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {}
