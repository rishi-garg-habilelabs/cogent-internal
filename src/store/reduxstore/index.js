import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

let middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleware = composeEnhancers(applyMiddleware(...middleware));
} else {
  middleware = applyMiddleware(...middleware);
}

export default function reduxStore() {
  return createStore(rootReducer, middleware);
}
