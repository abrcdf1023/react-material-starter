import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createRootReducer, rootEpic } from 'redux/modules/root';

import * as apis from 'apis';
import * as schema from 'schema';

// create middlewares
export const epicMiddleware = createEpicMiddleware({
  dependencies: { apis, schema }
});
export const history = createBrowserHistory({
  basename: process.env.REACT_APP_ROUTER_BASENAME
});
const middlewares = [epicMiddleware, routerMiddleware(history)];

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

// run after create store
epicMiddleware.run(rootEpic);
