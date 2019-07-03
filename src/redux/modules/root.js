import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import { components, componentsEpics } from './components';
import entities from './entities/reducers';

export const rootEpic = combineEpics(componentsEpics);

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    components,
    entities
  });
