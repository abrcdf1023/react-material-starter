import { combineReducers } from 'redux-immutable';
import { combineEpics } from 'redux-observable';

import AlertDialog from './AlertDialog/reducers';
import Home from './Home/reducers';
import Theme from './Theme/reducers';

import HomeEpics from './Home/epics';

export const components = combineReducers({
  AlertDialog,
  Home,
  Theme
});

export const componentsEpics = combineEpics(HomeEpics);
