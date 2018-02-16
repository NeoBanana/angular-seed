import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Services
import { ConfigService } from './app-config.service';
//#region Store
// Store: not used in production
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Store
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects, CustomSerializer } from './shared/store';
export const metaReducers: MetaReducer<any>[] = isDevMode()
  ? [storeFreeze]
  : [];
//#endregion

//#region Apollo GraphQl
import { ApolloModule, Apollo } from 'apollo-angular';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
//#endregion

// FalseDatabase
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './dev/in-memory-data.service';

// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// Third party libraries

import { MaterialModule } from './shared/modules/material.module';

//#region App modules/components
import { ComponentsModule } from './shared/components/components.module';
import { ContainersModule } from './shared/containers/containers.module';
import { AppSandbox } from './app.sandox';
import { HttpModule } from '@angular/http';
import { SponsorsService } from './shared/asyncServices/sponsors.service';
import {
  AuthGuardIsLogged,
  AuthGuardNotLogged
} from './Auth/guards/auth.guard';
//#endregion

export const devModeModules: any[] = isDevMode()
  ? [
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false,
        delay: 1500,
        passThruUnknownUrl: true
      }),
      StoreDevtoolsModule.instrument()
    ]
  : [];
export function configServiceFactory(config: ConfigService) {
  return () =>
    isDevMode() ? config.load('development') : config.load('production');
}
export const Components = [AppComponent];
@NgModule({
  declarations: Components,
  imports: [
    ComponentsModule,
    ContainersModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    ...devModeModules
  ],

  providers: [
    SponsorsService,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    },
    AuthGuardIsLogged,
    AuthGuardNotLogged
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // Create an http link:
    const http = httpLink.create({
      uri: 'http://localhost:3000/api'
    });

    // Create a WebSocket link:
    // const ws = new WebSocketLink({
    //   uri: `ws://localhost:3000/subscriptions`,
    //   options: {
    //     reconnect: true
    //   }
    // });
    const link = split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      // ws,
      http
    );

    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link,
      cache: new InMemoryCache()
    });
  }
}
