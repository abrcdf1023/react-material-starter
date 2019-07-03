import { createSelector } from 'reselect';
import { List } from 'immutable';
import { denormalize } from 'normalizr';
import * as schema from 'schema';
import { getEntities } from 'redux/modules/entities/selectors';

export const getUsersFetchGet = state => state.getIn(['components', 'Home']);

export const getUsers = createSelector(
  getUsersFetchGet,
  getEntities,
  (fetchGet, entities) =>
    denormalize(
      fetchGet.getIn(['data', 'result'], List()),
      schema.users,
      entities
    )
);
