export default {
  app: {
    maxCityCount: 20,
  },
  api: {
    baseUrl: '//api.openweathermap.org/data/2.5',
    key: '6aa11244ceb610f7b5439ebe32b0b699',
  },
  storage: {
    prefix: 'react_redux_weather_app_prefix__',
    keys: {
      favorites: 'favorites',
    }
  },
  geolocation: {
    defaultLat: 0,
    defaultLon: 0,
    options: {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 0
    }
  }
}
