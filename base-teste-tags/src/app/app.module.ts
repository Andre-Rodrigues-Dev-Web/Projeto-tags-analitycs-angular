import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: 'googleTagManagerId', useValue: 'GTM-PV8586C' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
