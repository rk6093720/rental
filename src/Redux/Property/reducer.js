import * as types from "./actionTypes"
const initialState = {
    properties: [],
    modals:[],
    payment:[],
    extra:[],
    latefine:[],
    utility:[],
    units:[],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case types.GET_PROPERTY_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_PROPERTY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                properties: payload,
                isError: false,
            }
        case types.GET_PROPERTY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_PROPERTY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_PROPERTY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                properties: [...state.properties, payload],
                isError: false,
            }
        case types.POST_PROPERTY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_PROPERTY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_PROPERTY_SUCCESS:
            return {
                ...state,
                properties: state.properties.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_PROPERTY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_PROPERTY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_PROPERTY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                properties: state.properties.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_PROPERTY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_UNIT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_UNIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                units: payload,
                isError: false,
            }
        case types.GET_UNIT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_UNIT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_UNIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                units: [...state.units, payload],
                isError: false,
            }
        case types.POST_UNIT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_UNIT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_UNIT_SUCCESS:
            return {
                ...state,
                units: state.units.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_UNIT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_UNIT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_UNIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                units: state.units.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_UNIT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.ADD_MODAL:
            return {
                ...state,
                isLoading:false,
                modals: [...state.modals, payload],
                isError:false,
            };
        case types.DELETE_MODAL:
            return {
                ...state,
                modals: state.modals.filter((_, index) => index !== payload),
                isError: false,
                isLoading:false,
            };
        case types.ADD_EXTRA_MODAL:
            return {
                ...state,
                isLoading: false,
                modals: [...state.extra, payload],
                isError: false,
            };
        case types.DELETE_EXTRA_MODAL:
            return {
                ...state,
                modals: state.extra.filter((_, index) => index !== payload),
                isError: false,
                isLoading: false,
            };
        case types.ADD_LATEFINE_MODAL:
            return {
                ...state,
                isLoading: false,
                modals: [...state.latefine, payload],
                isError: false,
            };
        case types.DELETE_LATEFINE_MODAL:
            return {
                ...state,
                modals: state.latefine.filter((_, index) => index !== payload),
                isError: false,
                isLoading: false,
            };
        case types.ADD_PAYMENT_MODAL:
            return {
                ...state,
                isLoading: false,
                modals: [...state.payment, payload],
                isError: false,
            };
        case types.DELETE_PAYMENT_MODAL:
            return {
                ...state,
                modals: state.payment.filter((_, index) => index !== payload),
                isError: false,
                isLoading: false,
            };
        case types.ADD_UTILITY_MODAL:
            return {
                ...state,
                isLoading: false,
                modals: [...state.utility, payload],
                isError: false,
            };
        case types.DELETE_UTILITY_MODAL:
            return {
                ...state,
                modals: state.utility.filter((_, index) => index !== payload),
                isError: false,
                isLoading: false,
            };
        default:
            return state
    }
}
export {
    reducer
}
