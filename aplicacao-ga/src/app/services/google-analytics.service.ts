import { Injectable } from '@angular/core';
import { Gtag, GtagEvent } from 'angular-gtag';

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor(private google: Gtag) {}

  // Generics and Defaults
  async sendPageView(title: any, path: any, url: any) {
    if (localStorage.getItem('analytics') == 'yes') {
      this.google.pageview({
        page_title: title,
        page_path: path,
        page_location: url,
      });
    }
  }

  async sendEvent(type: string, category: any, label: any) {
    if (localStorage.getItem('analytics') == 'yes') {
      this.google.event(type, {
        event_category: category,
        event_label: label,
      });
    }
  }

  async sendEventWithProps(type: string, props: GtagEvent | undefined) {
    if (localStorage.getItem('analytics') == 'yes') {
      this.google.event(type, { ...props });
    }
  }

  async sendClickEvent(category: any, label: any) {
    this.google.event('click', {
      event_category: category,
      event_label: label,
    });
  }
}
