import { createAction } from 'redux-actions';

export const LOAD_SERVICES = 'LOAD_SERVICES';
export const LOAD_SERVICES_SUCCESS = 'LOAD_SERVICES_SUCCESS';
export const LOAD_SERVICES_ERROR = 'LOAD_SERVICES_ERROR';

export const LOAD_SERVICE_DETAILS = 'LOAD_SERVICE_DETAILS';
export const LOAD_SERVICE_DETAILS_SUCCESS = 'LOAD_SERVICE_DETAILS_SUCCESS';
export const LOAD_SERVICE_DETAILS_ERROR = 'LOAD_SERVICE_DETAILS_ERROR';

export const loadServices = createAction(LOAD_SERVICES);
export const loadServicesSuccess = createAction(LOAD_SERVICES_SUCCESS);
export const loadServicesError = createAction(LOAD_SERVICES_ERROR);

export const loadServiceDetails = createAction(LOAD_SERVICE_DETAILS);
export const loadServiceDetailsSuccess = createAction(LOAD_SERVICE_DETAILS_SUCCESS);
export const loadServiceDetailsError = createAction(LOAD_SERVICE_DETAILS_ERROR);