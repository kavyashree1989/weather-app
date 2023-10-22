import { Injectable } from '@angular/core';
import { API_URL, API_URL_LAT_LONG, RECENT_SEARCH_LIMIT } from './app.constant';
import { Weather } from './app.model';
import { Subject } from 'rxjs';

export interface Coords {
  lat: null | number;
  lon: null | number;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherAppService {
  constructor() {}

  public recentSearchChange = new Subject<Weather[]>();

  public favouriteChange = new Subject<Weather[]>();

  public recentSearchWeather: Weather = new Weather();

  public weatherTabChange = new Subject<number>();

  public bannerContextChange = new Subject<
    'home' | 'favourite' | 'recent-search'
  >();

  async search(q: string): Promise<any> {
    let url = API_URL;
    url = url.replace('{query}', q);
    const data = await fetch(url);
    return (await data.json()) ?? {};
  }

  async searchByLatitudeAndLongitude(lat: number, lon: number): Promise<any> {
    let url = API_URL_LAT_LONG;
    url = url.replace('{lat}', lat + '');
    url = url.replace('{lon}', lon + '');
    const data = await fetch(url);
    return (await data.json()) ?? {};
  }

  public getWeather(response: any, isSearch: boolean = false): Weather {
    const _weather = response?.weather[0];
    let weather = new Weather();
    weather.city = response.name;
    weather.country = response.sys.country;

    weather.description = _weather?.description;
    weather.temprature = response.main.temp;
    weather.minTemprature = response.main.temp_min;
    weather.maxTemprature = response.main.temp_max;
    weather.precipitation = response.clouds.all;
    weather.humidity = response.main.humidity;
    weather.wind = response.wind.speed;
    weather.visibility = response.visibility / 1000;
    weather.type = _weather?.main;
    weather.icon = _weather?.icon;
    weather.isUpdate = true;
    if (isSearch) {
      this.setCache(weather);
      this.recentSearchWeather = weather;
    }
    return weather;
  }

  public checkAndUpdateCache(weather: Weather, mode?: string) {
    const cacheMap = this.getCacheMap(mode);
    if (cacheMap[weather.city]) {
      this.setCache(weather);
    }
  }

  public updateCache(weather: Weather, isSearch: boolean = true) {
    if (!isSearch) {
      this.checkAndUpdateCache(weather);
    } else {
      this.setCache(weather);
    }
    this.checkAndUpdateCache(weather, 'fav');
  }

  public getCacheKey(mode?: string) {
    return mode === 'fav' ? 'favourite' : 'recent_search';
  }

  public publishCacheChange(mode?: string) {
    const data: Weather[] = this.getCacheData(mode);
    if (mode === 'fav') {
      this.favouriteChange.next(data);
    } else {
      this.recentSearchChange.next(data);
    }
  }

  public clearAllCache(mode?: string) {
    const key = this.getCacheKey(mode);
    const cacheMap = {};
    localStorage.setItem(key, JSON.stringify(cacheMap));
    this.publishCacheChange(mode);
  }

  public clearCache(weather: Weather, mode?: string) {
    const key = this.getCacheKey(mode);
    const cacheMap = this.getCacheMap(mode);
    delete cacheMap[weather.city];
    localStorage.setItem(key, JSON.stringify(cacheMap));
    this.publishCacheChange(mode);
  }

  public setCache(weather: Weather, mode?: string) {
    const key = this.getCacheKey(mode);
    const cacheMap = this.getCacheMap(mode);
    const index = Object.keys(cacheMap).length + 1;
    weather.order = index;
    cacheMap[weather.city] = weather;
    localStorage.setItem(key, JSON.stringify(cacheMap));
    this.publishCacheChange(mode);
  }

  public getCacheMap(mode?: string): { [key: string]: Weather } {
    const key = this.getCacheKey(mode);
    const cache = localStorage.getItem(key);
    let cacheMap: { [key: string]: Weather } = {};
    if (cache) {
      cacheMap = JSON.parse(cache);
    }
    return cacheMap;
  }

  public getCacheData(mode?: string): Weather[] {
    const cacheMap = this.getCacheMap(mode);
    let cacheData: Weather[] = [];

    for (const key in cacheMap) {
      cacheData.push(cacheMap[key]);
    }

    if (cacheData.length > 1) {
      cacheData.sort((w1: Weather, w2: Weather) => {
        if (w1.order > w2.order) {
          return -1;
        }
        if (w1.order < w2.order) {
          return 1;
        }
        return 0;
      });
    }

    if (cacheData.length > RECENT_SEARCH_LIMIT && !mode) {
      cacheData.length = RECENT_SEARCH_LIMIT;
    }
    return cacheData;
  }

  public setDefaultCoords(coords: Coords) {
    localStorage.setItem('defaultCoords', JSON.stringify(coords));
  }

  public getDefaultCoords(): Coords {
    const coords = localStorage.getItem('defaultCoords') || '{}';
    return JSON.parse(coords);
  }
}
