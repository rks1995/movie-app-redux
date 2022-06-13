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
//middleware code

export default logger;
