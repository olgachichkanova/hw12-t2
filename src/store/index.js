import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { serviceListReducer, serviceDetailsReducer } from "./reducers";
import { loadServicesEpic,loadServiceDetailsEpic } from "./epics"

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceDetails: serviceDetailsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    loadServicesEpic,
    loadServiceDetailsEpic
)

const epicMiddleware = createEpicMiddleware();

const store = legacy_createStore(reducer,composeEnhancers(
    applyMiddleware(epicMiddleware)
))

epicMiddleware.run(epic)

export default store;