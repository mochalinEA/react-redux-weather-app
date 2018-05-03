import config from '@/config';

export default {
  fetchCoords() {
    return new Promise((resolve, reject) => {
      const options = config.geolocation.options;
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        resolve({
          lat: coords.latitude,
          lon: coords.longitude
        })
      }, (error) => {
        resolve({
          lat: config.geolocation.defaultLat,
          lon: config.geolocation.defaultLon,
        })
      }, options);
    })
  }
}
