import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../app.model';
import { WeatherAppService, Coords } from '../app.service';
import { WEATHER_ICON_MAP_LARGE } from '../app.constant';

@Component({
  selector: 'weather-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class WeatherHomeComponent {
  dateTimeNow: Date = new Date();

  favMap: { [key: string]: Weather } = {};

  weather: Weather = new Weather();

  format: string = 'C';

  iconMap: { [key: string]: string } = WEATHER_ICON_MAP_LARGE;

  defaultCoords: Coords = { lat: null, lon: null };

  constructor(
    private weatherAppService: WeatherAppService,
    private route: ActivatedRoute
  ) {
    this.weatherAppService.favouriteChange.subscribe((favourites) => {
      this.favMap = this.weatherAppService.getCacheMap('fav');
    });

    this.route.queryParams.subscribe((qp) => {
      const city = qp['city'];
      if (city) {
        this.searchByCity(qp['city']);
        this.weatherAppService.weatherTabChange.next(0);
      }
    });

    this.defaultCoords = this.weatherAppService.getDefaultCoords();

    this.weatherAppService.bannerContextChange.next('home');
  }

  setFormat(format: string) {
    this.format = format;
  }

  manageFavourite() {
    if (this.favMap[this.weather.city]) {
      this.weatherAppService.clearCache(this.weather, 'fav');
    } else {
      this.weatherAppService.setCache(this.weather, 'fav');
    }
  }

  ngOnInit() {
    const city = this.route.snapshot.queryParams['city'];
    this.favMap = this.weatherAppService.getCacheMap('fav');
    if (!city) {
      this.searchByCoords();
    }
  }

  public searchByCoords() {
    if (this.defaultCoords.lat && this.defaultCoords.lon) {
      this.weatherAppService
        .searchByLatitudeAndLongitude(
          this.defaultCoords.lat,
          this.defaultCoords.lon
        )
        .then(
          (data) => {
            if (data.name) {
              this.weather = this.weatherAppService.getWeather(data);
              this.weatherAppService.updateCache(this.weather, false);
            }
          },
          (error) => {}
        );
    } else {
      this.setCorrdsAndSearchByCoords();
    }
  }

  public setCorrdsAndSearchByCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.defaultCoords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };

      this.weatherAppService.setDefaultCoords(this.defaultCoords);
      this.searchByCoords();
    });
  }

  public searchByCity(city: string) {
    this.weatherAppService.search(city).then(
      (data) => {
        if (data.name) {
          this.weather = this.weatherAppService.getWeather(data);
          this.weatherAppService.updateCache(this.weather);
        } else {
          this.searchByCoords();
        }
      },
      (error) => {}
    );
  }
}
