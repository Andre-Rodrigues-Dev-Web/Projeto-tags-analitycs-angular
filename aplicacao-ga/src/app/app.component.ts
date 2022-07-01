import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService
  ) {}

  title = 'angular-google-tag-manager demo application';

  customEvent() {
    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'ga_event',
      eventCategory: 'inclusao unitaria',
      eventAction: 'clicou',
      eventLabel: 'busca',
    };
    this.gtmService.pushTag(gtmTag);
  }

  ngOnInit() {}
}
