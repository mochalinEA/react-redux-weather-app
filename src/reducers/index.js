import { combineReducers } from 'redux';
import {
  SET_FAVORITES,
  ADD_CITY_TO_FAVORITES,
  REMOVE_CITY_FROM_FAVORITES,
  SET_ALL_FAVORITES_LOADING,
  SET_CURRENT_LOADING,
  UPDATE_CURRENT,
  UPDATE_SEARCH,
  SET_SEARCH_LOADING,
} from '@/actions';

function favorites(state = [], action) {
  switch (action.type) {
    case SET_FAVORITES:
      return [ ...action.favorites];
    case ADD_CITY_TO_FAVORITES:
      if (state.some(item => item.id === action.item.id)) {
        return state;
      }
      return [ ...state, action.item ];
    case REMOVE_CITY_FROM_FAVORITES:
      return state.filter(item => item.id !== action.id);
    case SET_ALL_FAVORITES_LOADING:
      return state.map(item => ({ ...item, isLoading: action.value }));
    default:
      return state;
  }
}

function current(state = { items: [ {id: 0} ] }, action) {
  switch (action.type) {
    case SET_CURRENT_LOADING:
      return {
        ...state,
        items: [
          {
            ...state.items[0],
            isLoading: action.value,
          },
        ],
      };
    case UPDATE_CURRENT:
      return {
        ...state,
        items: [
          {
            ...action.item,
            isLoading: false
          },
        ],
      };
    default:
      return state;
  }
}

function search(state = { value: '' }, action) {
  switch (action.type) {
    case SET_SEARCH_LOADING:
      return { ...state, isLoading: action.value };
    case UPDATE_SEARCH:
      return { ...state, value: action.value };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favorites,
  current,
  search,
});

export default rootReducer;
