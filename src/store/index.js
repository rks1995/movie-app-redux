import { createStore } from 'redux';

const reducers = (state = [], action) => {
  if (action.type === 'ADD_MOVIES') {
    return (state = action.movies);
  }

  return state;
};

const store = createStore(reducers);

export default store;
