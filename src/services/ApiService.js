import config from '@/config'

export default {
  fetchCityByName(name) {
    return fetch(`${config.api.baseUrl}/weather?APPID=${config.api.key}&q=${name}`)
      .then(response => response.json());
  },

  fetchCityByCoords(lat, lon) {
    return fetch(`${config.api.baseUrl}/weather?APPID=${config.api.key}&lat=${lat}&lon=${lon}`)
      .then(response => response.json());
  },

  fetchCitiesByIds(ids) {
    return fetch(`${config.api.baseUrl}/group?APPID=${config.api.key}&id=${ids.join(',')}&units=metric`)
      .then(response => response.json());
  }
}
