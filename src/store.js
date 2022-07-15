import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
const logger = createLogger({
  collapsed: true,
  stateTransformer: state => state.toJS()
});

const middleware = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
