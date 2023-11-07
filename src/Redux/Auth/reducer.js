import { appData, saveData } from "../../Component/LocalStorage";
import * as types from "./actionTypes";


const initialState = {
    isAuth: false,
    token: appData("token") || "",
    isLoading:false,
    isError:false,
    status:false,
    msg:"",
    forgetPasswordStatus:false,
    passwordUpdate:false,
    admin:[] ,
}

const reducer = (state = initialState, action) => {
    const { type, payload }=action;
    switch (type) {
    case  types.SIGNUP_REQUEST:
        return {
          ...state,
          isLoading:true,
        }
    case types.SIGNUP_SUCCESS:
        return {
            ...state,
            isLoading:false,status:true,msg:payload,
        }
     case types.SIGNUP_FAILURE:
        return {
            ...state,
            isLoading:false,
            isError:true,
            status:false
        }
    case types.LOGIN_REQUEST:
        return {
            ...state,
            isLoading:true,
        }
    case types.LOGIN_SUCCESS:
            let newLogin = saveData("token", payload)
        return {
            ...state,
            isLoading:false,
            token:newLogin,
            admin:payload,
            isAuth:true,
            isError:false,
            msg:payload
        }
    case types.LOGIN_FAILURE:
        return {
            ...state,
            isAuth:false,
            isLoading:false,
            isError:true
        }
        case types.FORGET_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true,
                forgetPasswordStatus: false, // Reset forget password status
            }
        case types.FORGET_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                forgetPasswordStatus: true, // Set forget password success status
                msg: payload
            }
        case types.FORGET_PASSWORD_FAILURE:
            return {
                ...state,
                isLoading: false,
                forgetPasswordStatus: false, // Set forget password failure status
                isError: true
            }
        case types.GET_RESET_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true,
                forgetPasswordStatus: false, // Reset forget password status
            };
        case types.GET_RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                forgetPasswordStatus: true, // Set forget password success status
                msg: payload,
            };
        case types.GET_RESET_PASSWORD_FAILURE:
            return {
                ...state,
                isLoading: false,
                forgetPasswordStatus: false, // Set forget password failure status
                isError: true,
            };

        case types.POST_RESET_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true,
                forgetPasswordStatus: false, // Reset forget password status
            };
        case types.POST_RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                passwordUpdate: true, // Set forget password success status
                email: payload,

            };
        case types.POST_RESET_PASSWORD_FAILURE:
            return {
                ...state,
                isLoading: false,
                forgetPasswordStatus: false, // Set forget password failure status
                isError: true,
            };
        case types.GET_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                admin:payload,
                isError:false
            };
        case types.GET_PROFILE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case types.POST_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case types.POST_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                passwordUpdate: true, // Set forget password success status
                admin:[...state.admin,payload],

            };
        case types.POST_PROFILE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case types.SIGNOUT_REQUEST: return {
            ...state
        }

    default:
        return state
    }
}
export {reducer}