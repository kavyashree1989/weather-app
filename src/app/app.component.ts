import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherAppService } from './app.service';
import { Weather } from './app.model';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WeatherAppComponent {
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  favMap: { [key: string]: Weather } = {};

  dateTimeNow: Date = new Date();

  selectedTabIndex: number = 0;

  drawerContext: string = 'menu';

  query: string = '';
  constructor(
    private weatherAppService: WeatherAppService,
    private router: Router
  ) {
    this.weatherAppService.favouriteChange.subscribe((favourites) => {
      this.favMap = this.weatherAppService.getCacheMap('fav');
    });

    this.weatherAppService.weatherTabChange.subscribe((index) => {
      this.selectedTabIndex = index;
    });
  }

  public onTabChange(index: number) {
    const route =
      index === 2 ? 'recentsearch' : index === 1 ? 'favourite' : 'home';
    this.selectedTabIndex = index;
    this.router.navigate([route]);
  }

  public onDrawerToggle(context: string) {
    this.drawerContext = context;
    this.drawer?.toggle();
  }

  public onBack() {
    this.drawer?.close();
  }

  public onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  public search() {
    this.drawer?.close();
    this.router.navigate(['/home'], { queryParams: { city: this.query } });
  }

  ngOnInit() {
    this.router.navigate(['/home']);
    this.favMap = this.weatherAppService.getCacheMap('fav');
  }
}
