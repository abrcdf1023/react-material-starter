import { combineReducers } from 'redux-immutable';
import { combineEpics } from 'redux-observable';

import AlertDialog from './AlertDialog/reducers';

export const components = combineReducers({
  AlertDialog
});

export const componentsEpics = combineEpics();
