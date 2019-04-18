import { createActions } from 'redux-actions';

const actionMap = {
  COMPONENTS: {
    ALERT_DIALOG: {
      HANDLE_OPEN: undefined,
      HANDLE_CLOSE: undefined,
      SET_TITLE: undefined,
      SET_MESSAGE: undefined
    }
  }
};

export default createActions(actionMap);
