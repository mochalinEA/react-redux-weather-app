import ApiService from '@/services/ApiService';
import StorageService from '@/services/StorageService';
import GeolocationService from '@/services/GeolocationService';
import config from '@/config';

/*
  в данном случае нет асинхронных запросов, поэтому технически как-бы thunk не требуется,
  но классические action-ы не должны иметь сайд эфектов,
  чтобы подчеркнуть эту особенность используется thunk
 */
export function addToFavorites(item) {
  return function (dispatch, getState) {
    if (getState().favorites.length >= config.app.maxCityCount) {
      return;
    }

    dispatch(addItemToFavorites(item));

    const key = `${config.storage.prefix}${config.storage.keys.favorites}`;
    const value = getState().favorites;
    StorageService.setData(key, value);
  };
}

export function removeFromFavorites(id) {
  return function (dispatch, getState) {
    dispatch(removeItemFromFavorites(id));

    const key = `${config.storage.prefix}${config.storage.keys.favorites}`;
    const value = getState().favorites;
    StorageService.setData(key, value);
  };
}

export function loadFavorites() {
  return function (dispatch, getState) {
    dispatch(loadFavoritesFromStorage());

    if (getState().favorites.length > 0) {
      dispatch(reloadFavorites());
    }
  }
}

function loadFavoritesFromStorage() {
  return function (dispatch) {
    const key = `${config.storage.prefix}${config.storage.keys.favorites}`;
    const favorites = StorageService.getData(key);

    if (favorites !== null) {
      dispatch(setFavorites(favorites));
    }
  }
}

function reloadFavorites() {
  return function (dispatch, getState) {
    const ids = getState().favorites.map(item => item.id);
    dispatch(setAllFavoritesLoading(true));

    ApiService.fetchCitiesByIds(ids)
      .then(items => {
        const favorites = items.map(mapCityFromResponse);
        dispatch(setFavorites(favorites));
      })
      .catch(error => {
        dispatch(setAllFavoritesLoading(false));
      })
  }
}

function mapCityFromResponse(json) {
  return {
    id: json.id,
    name: json.name,
    temp: kelvinToCelsius(json.main.temp),
  }
}

function kelvinToCelsius(temp) {
  return (temp - 273).toFixed();
}

export const ADD_CITY_TO_FAVORITES = 'ADD_CITY_TO_FAVORITES';
function addItemToFavorites(item) {
  return {
    type: ADD_CITY_TO_FAVORITES,
    item,
  };
}

export const REMOVE_CITY_FROM_FAVORITES = 'REMOVE_CITY_FROM_FAVORITES';
function removeItemFromFavorites(id) {
  return {
    type: REMOVE_CITY_FROM_FAVORITES,
    id,
  };
}

export const SET_FAVORITES = 'SET_FAVORITES';
function setFavorites(favorites) {
  return {
    type: SET_FAVORITES,
    favorites,
  };
}

export const SET_ALL_FAVORITES_LOADING = 'SET_ALL_FAVORITES_LOADING';
function setAllFavoritesLoading(value) {
  return {
    type: SET_ALL_FAVORITES_LOADING,
    value,
  }
}


export function findCurrentCity() {
  return function (dispatch) {
    dispatch(setCurrentLoading(true));

    GeolocationService.fetchCoords()
      .then(({ lat, lon }) => ApiService.fetchCityByCoords(lat, lon))
      .then(json => {
        dispatch(updateCurrent(mapCityFromResponse(json)));

        dispatch(setCurrentLoading(false));
      })
      .catch(error => {
        dispatch(setCurrentLoading(false));
      })
  }
}

export const SET_CURRENT_LOADING = 'SET_CURRENT_LOADING';
function setCurrentLoading(value) {
  return {
    type: SET_CURRENT_LOADING,
    value,
  };
}

export const UPDATE_CURRENT = 'UPDATE_CURRENT';
function updateCurrent(item) {
  return {
    type: UPDATE_CURRENT,
    item,
  };
}


export function search(query) {
  return function (dispatch, getState) {
    if (getState().current.isLoading) {
      return;
    }

    dispatch(setSearchLoading(true));

    return ApiService.fetchCityByName(query)
      .then(json => {
        dispatch(updateCurrent(mapCityFromResponse(json)));

        dispatch(setSearchLoading(false));
      })
      .catch(error => {
        dispatch(setSearchLoading(false));
      })
  }
}

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export function updateSearch(value) {
  return {
    type: UPDATE_SEARCH,
    value,
  };
}

export const SET_SEARCH_LOADING = 'SET_SEARCH_LOADING';
function setSearchLoading(value) {
  return {
    type: SET_SEARCH_LOADING,
    value,
  };
}

