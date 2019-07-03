import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { HANDLE_CHANGE_THEME_OPTIONS } from './types';

const reducer = handleActions(
  {
    [HANDLE_CHANGE_THEME_OPTIONS]: (state, action) =>
      state.mergeDeep(action.payload)
  },
  fromJS({
    palette: {
      background: {
        default: '#fff'
      }
    },
    typography: {
      useNextVariants: true,
      fontFamily: [
        '"Roboto"',
        '"Helvetica"',
        '"Arial"',
        'sans-serif',
        '"Microsoft JhengHei"'
      ].join(',')
    }
  })
);

export default reducer;
