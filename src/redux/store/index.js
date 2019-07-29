import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../ducks";
import rootSaga from "../sagas/";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
