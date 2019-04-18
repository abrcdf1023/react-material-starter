import { createSelector } from 'reselect';
import { List } from 'immutable';

export const getUsersFetchGet = state => state.getIn(['components', 'Home']);

export const getUsers = createSelector(
  getUsersFetchGet,
  fetchGet => fetchGet.getIn(['data', 'data'], List())
);
