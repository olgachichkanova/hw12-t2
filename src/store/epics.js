import { ofType } from 'redux-observable';
import { mergeMap, catchError, map, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { loadServiceDetailsError, loadServiceDetailsSuccess, loadServicesError, loadServicesSuccess, LOAD_SERVICES, LOAD_SERVICE_DETAILS } from './services';

const url = 'http://localhost:7070/api/services';

export const loadServicesEpic = action$ => action$.pipe(
    ofType(LOAD_SERVICES),
    mergeMap(() => ajax.getJSON(url).pipe(
                map(res => loadServicesSuccess(res)),
                catchError(e => of(loadServicesError(e)))
            )
    )
)

export const loadServiceDetailsEpic = action$ => action$.pipe(
    ofType(LOAD_SERVICE_DETAILS),
    mergeMap(action => ajax.getJSON(`${url}/${action.payload}`).pipe(
                map(res => loadServiceDetailsSuccess(res)),
                catchError(e => of(loadServiceDetailsError(e)))
            )
    )
)