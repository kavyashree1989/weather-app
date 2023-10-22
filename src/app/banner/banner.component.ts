import { Component, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { WeatherAppService } from '../app.service';
import { APP_TITLE } from '../app.constant';
@Component({
  selector: 'weather-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class WeatherBannerComponent {
  @Output() drawerToggleChange: EventEmitter<string> =
    new EventEmitter<string>();

  public query: string = '';

  public bannerContext: string = 'home';

  public title: string = APP_TITLE['home'];

  constructor(
    private router: Router,
    private weatherAppService: WeatherAppService,
    private location: Location
  ) {
    this.weatherAppService.bannerContextChange.subscribe((context) => {
      this.bannerContext = !!context ? context : 'home';
      this.title = APP_TITLE[context] || '';
    });
  }

  public onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  public search() {
    this.router.navigate(['home'], { queryParams: { city: this.query } });
  }

  public onToggleDrawer(context: string) {
    this.drawerToggleChange.emit(context);
  }

  public onBack() {
    this.location.back();
  }
}
