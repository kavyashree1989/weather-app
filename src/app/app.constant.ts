export const API_ID = '843bceea241e096d6428fc2e3447744c';

export const API_URL = `https://api.openweathermap.org/data/2.5/weather?q={query}&appid=${API_ID}`;

export const API_URL_LAT_LONG = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_ID}`;

export const RECENT_SEARCH_LIMIT = 10;

export const WEATHER_ICON_MAP_SMALL = {
  '01d': '/assets/images/weather/icon_mostly_sunny_small.png',
  '01n': '/assets/images/weather/icon_clear_night_small.png',
  '02d': '/assets/images/weather/icon_partly_cloudy_small.png',
  '02n': '/assets/images/weather/icon_partly_cloudy_small.png',
  '03d': '/assets/images/weather/icon_mostly_cloudy_small.png',
  '03n': '/assets/images/weather/icon_mostly_cloudy_small.png',
  '04d': '/assets/images/weather/icon_mostly_cloudy_small.png',
  '04n': '/assets/images/weather/icon_mostly_cloudy_small.png',
  '09d': '/assets/images/weather/icon_rain_small.png',
  '09n': '/assets/images/weather/icon_rain_small.png',
  '10d': '/assets/images/weather/icon_rain_small.png',
  '10n': '/assets/images/weather/icon_rain_small.png',
  '11d': '/assets/images/weather/icon_thunderstorm_small.png',
  '11n': '/assets/images/weather/icon_thunderstorm_small.png',
  '13d': '/assets/images/weather/icon_mostly_cloudy_small.png',
  '13n': '/assets/images/weather/icon_mostly_cloudy_small.png',
  '50d': '/assets/images/weather/icon_mostly_cloudy_small.png',
  '50n': '/assets/images/weather/icon_mostly_cloudy_small.png',
};

export const WEATHER_ICON_MAP_LARGE = {
  '01d': '/assets/images/weather/icon_mostly_sunny.png',
  '01n': '/assets/images/weather/icon_clear_night.png',
  '02d': '/assets/images/weather/icon_partially_cloudy_big.png',
  '02n': '/assets/images/weather/icon_partially_cloudy_big.png',
  '03d': '/assets/images/weather/icon_mostly_cloudy_big.png',
  '03n': '/assets/images/weather/icon_mostly_cloudy_big.png',
  '04d': '/assets/images/weather/icon_mostly_cloudy_big.png',
  '04n': '/assets/images/weather/icon_mostly_cloudy_big.png',
  '09d': '/assets/images/weather/icon_rain_big.png',
  '09n': '/assets/images/weather/icon_rain_big.png',
  '10d': '/assets/images/weather/icon_rain_big.png',
  '10n': '/assets/images/weather/icon_rain_big.png',
  '11d': '/assets/images/weather/icon_thunderstorm_big.png',
  '11n': '/assets/images/weather/icon_thunderstorm_big.png',
  '13d': '/assets/images/weather/icon_mostly_cloudy_big.png',
  '13n': '/assets/images/weather/icon_mostly_cloudy_big.png',
  '50d': '/assets/images/weather/icon_mostly_cloudy_big.png',
  '50n': '/assets/images/weather/icon_mostly_cloudy_big.png',
};

export const APP_TITLE = {
  home: '',
  favourite: 'Favourite',
  'recent-search': 'Recent Search',
};
