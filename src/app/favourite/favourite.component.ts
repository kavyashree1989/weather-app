import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeatherAppService } from '../app.service';
import { Weather } from '../app.model';
import { WEATHER_ICON_MAP_SMALL } from '../app.constant';
import { WeatherConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'weather-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class WeatherFavouriteComponent {
  favMap: { [key: string]: Weather } = {};

  favourites: Weather[] = [];

  iconMap: { [key: string]: string } = WEATHER_ICON_MAP_SMALL;

  constructor(
    private weatherAppService: WeatherAppService,
    public dialog: MatDialog
  ) {
    this.favourites = this.weatherAppService.getCacheData('fav');

    this.weatherAppService.favouriteChange.subscribe((favourites) => {
      this.favourites = favourites;
      this.favMap = this.weatherAppService.getCacheMap('fav');
    });
    this.weatherAppService.bannerContextChange.next('favourite');
  }

  public manageFavourite(weather: Weather) {
    if (this.favMap[weather.city]) {
      this.weatherAppService.clearCache(weather, 'fav');
    } else {
      this.weatherAppService.setCache(weather, 'fav');
    }
  }

  public onRemoveAll() {
    const dialogRef = this.dialog.open(WeatherConfirmDialogComponent, {
      width: '460px',
      height: '210px',
      panelClass: 'confirm-dialog',
      data: {
        message: 'Are you sure want to remove all the favourites?',
      },
    });

    dialogRef.afterClosed().subscribe((status) => {
      if (status) {
        this.weatherAppService.clearAllCache('fav');
      }
    });
  }

  ngOnInit() {
    this.favMap = this.weatherAppService.getCacheMap('fav');
  }
}
