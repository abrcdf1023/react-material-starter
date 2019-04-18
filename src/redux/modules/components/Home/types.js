import {
  fetchGetUsers,
  fetchGetUsersRequest,
  fetchGetUsersSuccess,
  fetchGetUsersFailure
} from './actions';

export const FETCH_GET_USERS = fetchGetUsers().type;
export const FETCH_GET_USERS_REQUEST = fetchGetUsersRequest().type;
export const FETCH_GET_USERS_SUCCESS = fetchGetUsersSuccess().type;
export const FETCH_GET_USERS_FAILURE = fetchGetUsersFailure().type;
