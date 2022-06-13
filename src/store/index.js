import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { logger, thunk } from '../middleware';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
