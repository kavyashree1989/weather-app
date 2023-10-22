import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Weather } from '../app.model';
import { WEATHER_ICON_MAP_SMALL } from '../app.constant';
import { WeatherAppService } from '../app.service';
@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent {
  @Input() weatherList: Weather[] = [];

  @Input() message: string = 'No Data';

  @Input() favMap: { [key: string]: Weather } = {};

  @Output() favChange: EventEmitter<Weather> = new EventEmitter<Weather>();

  iconMap: { [key: string]: string } = WEATHER_ICON_MAP_SMALL;

  constructor(
    private weatherAppService: WeatherAppService,
    private router: Router
  ) {
    this.weatherAppService.favouriteChange.subscribe((favourites) => {
      this.favMap = this.weatherAppService.getCacheMap('fav');
    });
  }

  public getFormatedTemprature(temp: number): number {
    return Math.floor(temp - 273.15);
  }

  public onFavChange(event: MouseEvent, weather: Weather) {
    event.stopPropagation();
    this.favChange.emit(weather);
  }

  public routeToHome(weather: Weather) {
    this.router.navigate(['home'], { queryParams: { city: weather.city } });
  }

  ngOnInit() {
    this.favMap = this.weatherAppService.getCacheMap('fav');
  }
}
