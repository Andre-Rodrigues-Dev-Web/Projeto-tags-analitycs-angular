import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-TH8245L',
    }),
  ],
  providers: [{ provide: 'googleTagManagerId', useValue: 'GTM-PV8586C' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
