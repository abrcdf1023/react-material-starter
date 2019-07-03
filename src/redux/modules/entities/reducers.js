import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { SET_ENTITIES } from './types';

const reducer = handleActions(
  {
    [SET_ENTITIES]: (state, action) => {
      if (action.payload) {
        return state.mergeDeep(state, action.payload);
      }
      return state;
    }
  },
  fromJS({})
);

export default reducer;
