import { createActions } from 'redux-actions';

/**
 * We use actionMap to create all actions in this file.
 */
const actionMap = {
  COMPONENTS: {
    ALERT_DIALOG: {
      HANDLE_OPEN: undefined,
      HANDLE_CLOSE: undefined,
      SET_TITLE: undefined,
      SET_MESSAGE: undefined
    },
    HOME: {
      FETCH_GET_USERS: undefined,
      FETCH_GET_USERS_REQUEST: undefined,
      FETCH_GET_USERS_SUCCESS: undefined,
      FETCH_GET_USERS_FAILURE: undefined
    },
    THEME: {
      HANDLE_CHANGE_THEME_OPTIONS: undefined
    }
  }
};

export default createActions(actionMap);
