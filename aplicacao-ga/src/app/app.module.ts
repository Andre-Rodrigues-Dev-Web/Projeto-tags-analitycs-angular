import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: 'googleTagManagerId', useValue: 'GTM-T4F37NX' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
