import { ofType } from 'redux-observable';
import { mergeMap, catchError, map } from 'rxjs/operators';
import axios from 'axios';
import { of } from 'rxjs';
import { loadServiceDetailsError, loadServiceDetailsSuccess, loadServicesError, loadServicesSuccess, LOAD_SERVICES, LOAD_SERVICE_DETAILS } from './services';

const url = process.env.REACT_APP_BASE_URL;

export const loadServicesEpic = action$ => action$.pipe(
    ofType(LOAD_SERVICES),
    mergeMap(() => 
        axios
            .get(url)
            .then(res => loadServicesSuccess(res.data))
            .catch(e => loadServicesError(e))
    )
)

export const loadServiceDetailsEpic = action$ => action$.pipe(
    ofType(LOAD_SERVICE_DETAILS),
    mergeMap(action =>
        axios
            .get(`${url}/${action.payload}`)
            .pipe(
                map(res => loadServiceDetailsSuccess(res)),
                catchError(e => of(loadServiceDetailsError(e)))
            )
    )
)