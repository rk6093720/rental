import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as App } from "../Redux/App/reducer";
import {reducer as Auth } from "../Redux/Auth/reducer";
const rootReducer = combineReducers({App,Auth})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
export { store }