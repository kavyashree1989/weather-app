import { Component } from '@angular/core';
import { WeatherAppService } from '../app.service';
import { Weather } from '../app.model';
import { WEATHER_ICON_MAP_SMALL } from '../app.constant';

@Component({
  selector: 'weather-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss'],
})
export class WeatherRecentSearchComponent {
  favMap: { [key: string]: Weather } = {};

  recentSearch: Weather[] = [];

  iconMap: { [key: string]: string } = WEATHER_ICON_MAP_SMALL;

  constructor(private weatherAppService: WeatherAppService) {
    this.recentSearch = this.weatherAppService.getCacheData();
    this.weatherAppService.recentSearchChange.subscribe(
      (recentSearch) => (this.recentSearch = recentSearch)
    );

    this.weatherAppService.favouriteChange.subscribe((favourites) => {
      this.favMap = this.weatherAppService.getCacheMap('fav');
    });

    this.weatherAppService.bannerContextChange.next('recent-search');
  }

  public manageFavourite(weather: Weather) {
    if (this.favMap[weather.city]) {
      this.weatherAppService.clearCache(weather, 'fav');
    } else {
      this.weatherAppService.setCache(weather, 'fav');
    }
  }

  public onClearAll() {
    this.weatherAppService.clearAllCache();
  }

  ngOnInit() {
    this.favMap = this.weatherAppService.getCacheMap('fav');
  }
}
