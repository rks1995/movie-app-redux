// middleware
// logger(obj, next, action) -> currying to transform logger fn
// logger(obj)(next)(action)
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('ACTION_TYPE', action.type);
    next(action);
  };

const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === 'function') {
      return action(dispatch);
    }
    console.log('ACTION_TYPE', action.type);
    next(action);
  };

export { logger, thunk };
