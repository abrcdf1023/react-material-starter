import createFetchReducer from '@e-group/frontend-utils/es/createFetchReducer';
import {
  FETCH_GET_USERS,
  FETCH_GET_USERS_REQUEST,
  FETCH_GET_USERS_SUCCESS,
  FETCH_GET_USERS_FAILURE
} from './types';

const reducer = createFetchReducer({
  take: FETCH_GET_USERS,
  request: FETCH_GET_USERS_REQUEST,
  success: FETCH_GET_USERS_SUCCESS,
  failure: FETCH_GET_USERS_FAILURE
});

export default reducer;
