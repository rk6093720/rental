import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as App } from "../Redux/App/reducer";
import {reducer as Auth } from "../Redux/Auth/reducer";
import {reducer as Property} from "../Redux/Property/reducer"
const rootReducer = combineReducers({Property,App,Auth})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
export { store }