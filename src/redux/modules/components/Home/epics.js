import { combineEpics } from 'redux-observable';
import { fromJS } from 'immutable';
import { of, concat } from 'rxjs';
import { normalize } from 'normalizr';
import { setEntities } from 'redux/modules/entities/actions';
import {
  fetchGetUsersRequest,
  fetchGetUsersSuccess,
  fetchGetUsersFailure
} from './actions';
import { FETCH_GET_USERS } from './types';

import makeBasicFetchEpic from '@e-group/utils/makeBasicFetchEpic';
import apiErrorsHandler from 'utils/apiErrorsHandler';

export const fetchGetUsersEpic = makeBasicFetchEpic({
  actionType: FETCH_GET_USERS,
  apiName: 'fetchGetUsers',
  fetchRequest: fetchGetUsersRequest,
  handleSuccess: (response, { schema }) => {
    const { result, entities } = normalize(
      response.data.data || [],
      schema.users
    );
    return [
      setEntities(fromJS(entities)),
      fetchGetUsersSuccess(
        fromJS({
          result,
          total: response.data.total
        })
      )
    ];
  },
  handleFailure: (error, { state$, action }) =>
    concat(
      apiErrorsHandler(error, { state$, action }),
      of(fetchGetUsersFailure(error))
    )
});

export default combineEpics(fetchGetUsersEpic);
