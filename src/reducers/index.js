import { combineReducers } from 'redux';

import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
} from '../actions';

var initialMovieState = {
  movies: [],
  favourites: [],
  showFavourites: false,
};

//reducer will return a new state and re render the component
const moviesReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.movie],
      };
    case REMOVE_FROM_FAVOURITES:
      const { movie } = action;
      const newFavorites = state.favourites.filter((item) => item !== movie);
      return {
        ...state,
        favourites: newFavorites,
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    default:
      return state;
  }
};

var initialSearchState = {
  result: {},
};

const searchReducer = (state = initialSearchState, action) => {
  return state;
};

// var initialRootState = {
//   movies: initialMovieState,
//   search: initialSearchState,
// };

// const rootReducer = (state = initialRootState, action) => {
//   return {
//     movies: moviesReducer(state.movies, action),
//     search: searchReducer(state.search, action),
//   };
// };

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});
