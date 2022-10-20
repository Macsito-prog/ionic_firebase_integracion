import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  RouteReuseStrategy
} from '@angular/router';

import {
  IonicModule,
  IonicRouteStrategy
} from '@ionic/angular';

import {
  AppComponent
} from './app.component';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  initializeApp,
  provideFirebaseApp
} from '@angular/fire/app';
import {
  environment
} from '../environments/environment';
import {
  provideAuth,
  getAuth
} from '@angular/fire/auth';
import {
  ReactiveFormsModule
} from '@angular/forms';

import{
  HttpClientModule
} from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule,ReactiveFormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth())],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
