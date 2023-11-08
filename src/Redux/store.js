import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as App } from "../Redux/App/reducer";
import {reducer as Auth } from "../Redux/Auth/reducer";
import {reducer as Property} from "../Redux/Property/reducer";
import {reducer as Tentants} from "../Redux/Tentants/reducer";
import {reducer as Lease} from "../Redux/Lease/reducer";
import {reducer as Utility} from "../Redux/Utility/reducer";
import {reducer as Payment} from "../Redux/Payment/reducer";
import {reducer as VacateNotice} from "../Redux/VacateNotice/reducer";
import {reducer as System} from "../Redux/System/reducer";
import {reducer as profile} from "../Redux/System/reducer";
const rootReducer = combineReducers({profile,System,VacateNotice,Payment,Utility,Lease,Tentants,Property,App,Auth})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
export { store }