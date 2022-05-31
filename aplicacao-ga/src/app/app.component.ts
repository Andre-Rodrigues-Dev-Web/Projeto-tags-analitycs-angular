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
      event: 'button-click',
      data: 'my-custom-event',
      action: 'clicou',
      label: 'banner:2a-via',
    };
    this.gtmService.pushTag(gtmTag);

    alert('Este botão foi clicado');
  }

  ngOnInit() {
    // push GTM data layer for every visited page
    this.router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          action: 'clicou',
          label: 'banner:2a-via',
          pageName: item.url,
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
