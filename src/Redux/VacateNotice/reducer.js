import * as types from "./actionTypes"
const initialState = {
    vacate: [],
    invoice:[],
    msg:"",
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_VACATENOTICE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_VACATENOTICE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                vacate: payload,
                isError: false,
            }
        case types.GET_VACATENOTICE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_VACATENOTICE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_VACATENOTICE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                vacate: [...state.vacate, payload],
                isError: false,
            }
        case types.POST_VACATENOTICE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_VACATENOTICE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_VACATENOTICE_SUCCESS:
            return {
                ...state,
                vacate: state.vacate.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_VACATENOTICE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_VACATENOTICE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_VACATENOTICE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                vacate: state.vacate.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_VACATENOTICE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            case types.GET_INVOICE_REQUEST:
                return {
                    ...state,
                    isLoading: true
                }
            case types.GET_INVOICE_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    invoice: payload,
                    isError: false,
                }
            case types.GET_INVOICE_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            case types.POST_INVOICE_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                }
            case types.POST_INVOICE_SUCCESS:
                console.log(payload);
                return {
                    ...state,
                    isLoading: false,
                    invoice: [...state.invoice, payload],
                    msg:payload,
                    isError: false,
                }
            case types.POST_INVOICE_FAILURE:
                console.log(payload.response.data.msg);
                return {
                    ...state,
                    msg:payload.response.data.msg,
                    isLoading: false,
                    isError: true
                }
            case types.EDIT_INVOICE_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                }
            case types.EDIT_INVOICE_SUCCESS:
                console.log(payload)
                return {
                    ...state,
                    invoice: state.invoice.map((item) => item._id === payload.id ? payload : item),
                    isLoading: false,
                    msg:payload,
                    isError: false,
                }
            case types.EDIT_INVOICE_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            case types.DELETE_INVOICE_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                }
            case types.DELETE_INVOICE_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    invoice: state.invoice.filter((land) => land._id !== payload),
                    msg:payload,
                    isError: false,
                }
            case types.DELETE_INVOICE_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                    msg:payload
                }
        default:
            return state
    }
}
export {
    reducer
}
