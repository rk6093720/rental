import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as App } from "../Redux/App/reducer";
import {reducer as Auth } from "../Redux/Auth/reducer";
import {reducer as Property} from "../Redux/Property/reducer";
import {reducer as Tentants} from "../Redux/Tentants/reducer";
import {reducer as Lease} from "../Redux/Lease/reducer";
import {reducer as Utility} from "../Redux/Utility/reducer";
import {reducer as Payment} from "../Redux/Payment/reducer";
const rootReducer = combineReducers({Auth,Payment,Utility,Lease,Tentants,Property,App})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
export { store }