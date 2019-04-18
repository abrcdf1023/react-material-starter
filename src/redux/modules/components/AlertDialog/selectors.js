import { createSelector } from 'reselect';

export const getRootStates = state =>
  state.getIn(['components', 'AlertDialog']);

export const getIsOpen = createSelector(
  getRootStates,
  rootStates => rootStates.get('isOpen')
);

export const getTitle = createSelector(
  getRootStates,
  rootStates => rootStates.get('title')
);

export const getMessage = createSelector(
  getRootStates,
  rootStates => rootStates.get('message')
);
