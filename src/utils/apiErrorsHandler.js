import { of, concat } from 'rxjs';
import { replace } from 'connected-react-router/immutable';
import {
  handleOpen as handleAlertDialogOpen,
  setTitle,
  setMessage
} from 'redux/modules/components/AlertDialog/actions';
import { fetchPostLogs } from 'apis';

export default function apiErrorsHandler(error, { state$, action }) {
  let payload = {
    function: JSON.stringify(action),
    browserDescription: window.navigator.userAgent,
    jsonData: JSON.stringify(state$.value.toJS()),
    level: 'ERROR'
  };

  if (error.response && error.response.status) {
    switch (error.response.status) {
      case 401: {
        return concat(
          of(setTitle('帳號密碼錯誤')),
          of(setMessage('帳號密碼錯誤請再輸入一次。')),
          of(handleAlertDialogOpen())
        );
      }
      case 403: {
        document.cookie =
          'lid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        return concat(
          of(replace('/login')),
          of(setTitle('登入逾時')),
          of(setMessage('您的登入狀態已經逾時請重新登入一次。')),
          of(handleAlertDialogOpen())
        );
      }
      default:
        payload = {
          ...payload,
          message: error.response.statusText
        };
        fetchPostLogs(payload);
        return of();
    }
  }
  // 例外處理非 api 錯誤
  payload = {
    ...payload,
    message: error.message
  };
  fetchPostLogs(payload);
  return of();
}
