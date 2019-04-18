import { of, concat } from 'rxjs';
import { replace } from 'connected-react-router/immutable';
import {
  handleOpen as handleAlertDialogOpen,
  setTitle,
  setMessage
} from 'redux/modules/components/AlertDialog/actions';

export default function apiErrorsHandler(state$, error) {
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
        return concat(
          of(replace('/login')),
          of(setTitle('登入逾時')),
          of(setMessage('您的登入狀態已經逾時請重新登入一次。')),
          of(handleAlertDialogOpen())
        );
      }
      default:
        return concat(
          of(setTitle('未知的錯誤')),
          of(setMessage('未知的錯誤，若繼續發生請嘗試重新登入或聯絡我們。')),
          of(handleAlertDialogOpen())
        );
    }
  }
  // 例外處理非 api 錯誤
  return of();
}
