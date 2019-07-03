import { combineEpics } from 'redux-observable';
import { of, concat } from 'rxjs';
import { fromJS } from 'immutable';
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
  handleSuccess: response => {
    if (response.status === 204) {
      return [fetchGetUsersSuccess()];
    }
    return [fetchGetUsersSuccess(fromJS(response.data))];
  },
  handleFailure: (error, { state$, action }) =>
    concat(
      apiErrorsHandler(error, { state$, action }),
      of(fetchGetUsersFailure(error))
    )
});

export default combineEpics(fetchGetUsersEpic);
