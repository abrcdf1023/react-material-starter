import { ofType } from 'redux-observable';
import { of, concat } from 'rxjs';
import { switchMap, flatMap, catchError, debounceTime } from 'rxjs/operators';
import createObservableApi from '@e-group/frontend-utils/es/createObservableApi';
import apiErrorsHandler from 'utils/apiErrorsHandler';

export default function makeBasicFetchEpic({
  actionType,
  debounceTime: time,
  apiName,
  fetchRequest,
  handleSuccess,
  fetchFailure
}) {
  return (action$, state$, { apis, schema }) =>
    action$.pipe(
      ofType(actionType),
      debounceTime(time || 0),
      switchMap(action =>
        // we can concat observable actions
        // see this comment https://github.com/redux-observable/redux-observable/issues/62#issuecomment-266337873
        concat(
          of(fetchRequest()),
          createObservableApi(apis[apiName], action.payload).pipe(
            flatMap(response =>
              handleSuccess(response, { action, apis, schema })
            ),
            catchError(error =>
              concat(apiErrorsHandler(state$, error), of(fetchFailure(error)))
            )
          )
        )
      )
    );
}
