import { LOAD_SERVICES, LOAD_SERVICES_ERROR, LOAD_SERVICES_SUCCESS, LOAD_SERVICE_DETAILS, LOAD_SERVICE_DETAILS_ERROR, LOAD_SERVICE_DETAILS_SUCCESS } from "./services";

const initialState = {
    services: [],
    serviceDetails: {},
    loading: false,
    error: null
}

export function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SERVICES:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOAD_SERVICES_SUCCESS:
            const {items} = action.payload
            return {
                ...state,
                services: items,
                loading: false,
                error: null,
            }
        case LOAD_SERVICES_ERROR:
            const {error} = action.payload
            return {
                ...state,
                loading: false,
                error
            }
        default:
            return state;
    }
}

export function serviceDetailsReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_SERVICE_DETAILS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOAD_SERVICE_DETAILS_SUCCESS:
            const {item} = action.payload
            return {
                ...state,
                serviceDetails: item,
                loading: false,
                error: null
            }
        case LOAD_SERVICE_DETAILS_ERROR:
            const {error} = action.payload
            return {
                ...state,
                loading: false,
                error: error
            }
        default:
            return state;
    }
}