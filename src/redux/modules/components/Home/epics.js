import { combineEpics } from 'redux-observable';
import { fromJS } from 'immutable';
import {
  fetchGetUsersRequest,
  fetchGetUsersSuccess,
  fetchGetUsersFailure
} from './actions';
import { FETCH_GET_USERS } from './types';

import makeBasicFetchEpic from 'utils/makeBasicFetchEpic';

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
  fetchFailure: fetchGetUsersFailure
});

export default combineEpics(fetchGetUsersEpic);
