import { Component } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aplicacao-ga-input';
  constructor(private gtmService: GoogleTagManagerService) {}

  TesteInput() {
    const gtmTag1 = {
      event: 'ga_event',
      eventCategory: 'pas',
      eventAction: 'clicou',
      eventLabel: 'ver detalhes',
    };
    this.gtmService.pushTag(gtmTag1);
  }
}
