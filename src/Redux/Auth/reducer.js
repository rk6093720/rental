import { appData, saveData } from "../../Component/LocalStorage";
import * as types from "./actionTypes";
const initialState = {
    isAuth: false,
    isAuthAdmin:false,
    isAuthUser:false,
    token: appData("Supertoken") || appData("OwnerToken") ||  "",
    isLoading:false,
    isError:false,
    status:false,
    msg:"",
    roles:"",
    forgetPasswordStatus:false,
    passwordUpdate:false,
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
        console.log(payload)
        const {role,token}=payload;
        console.log("2",token)
        let newLogin = saveData(`${role}token`,payload)
        return {
            ...state,
            isLoading:false,
            token:newLogin || token,
            admin:token,
            roles:payload.role,
            isAuth:true,
            isAuthAdmin:true,
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
        // case types.OWNER_LOGIN_REQUEST:
        //     return {
        //         ...state,
        //         isLoading:true,
        //     }
        case types.OWNER_LOGIN_SUCCESS:
            console.log(payload)
            let newOwnerLogin = saveData(`${payload.role}token`,payload)
            return {
                ...state,
                isLoading:false,
                token:newOwnerLogin,
                admin:payload.email,
                role:payload.role,
                isAuthAdmin:true,
                // isAuthUser:payload.role === "User",
                isError:false,
                msg:payload
            }
        // case types.OWNER_LOGIN_FAILURE:
        //     console.log(payload)
        //     return {
        //         ...state,
        //         isAuth:false,
        //         isLoading:false,
        //         msg:payload,
        //         isError:true
        //     }
        case types.FORGET_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true,
                forgetPasswordStatus: false, // Reset forget password status
            }
        case types.FORGET_PASSWORD_SUCCESS:
            console.log("forgetpwd",payload)
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
            console.log(payload,"resetpassword")
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
            case types.SIGNOUT_REQUEST: return {
                ...state
            }
            case types.ROLES:
                console.log(payload)
                return {
                    ...state,
                    roles:payload,
                    role:payload

                }
    default:
        return state
    }
}
export {reducer}