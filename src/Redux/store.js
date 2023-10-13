import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as App } from "../Redux/App/reducer";
import {reducer as Auth } from "../Redux/Auth/reducer";
import {reducer as Property} from "../Redux/Property/reducer";
import {reducer as Tentants} from "../Redux/Tentants/reducer";
import {reducer as Lease} from "../Redux/Lease/reducer";
const rootReducer = combineReducers({Lease,Tentants,Property,App,Auth})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
export { store }