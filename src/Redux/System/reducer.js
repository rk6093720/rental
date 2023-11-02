import * as types from "./actionTypes"
const initialState = {
    system: [],
    properties:[],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case types.GET_SYSTEM_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_SYSTEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                system: payload,
                isError: false,
            }
        case types.GET_SYSTEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_SYSTEM_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_SYSTEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                system: [...state.system, payload],
                isError: false,
            }
        case types.POST_SYSTEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_SYSTEM_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_SYSTEM_SUCCESS:
            return {
                ...state,
                system: state.system.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_SYSTEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_SYSTEM_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_SYSTEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                system: state.system.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_SYSTEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_PROPERTIES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_PROPERTIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                properties: payload,
                isError: false,
            }
        case types.GET_PROPERTIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_PROPERTIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_PROPERTIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                properties: [...state.properties, payload],
                isError: false,
            }
        case types.POST_PROPERTIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_PROPERTIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_PROPERTIES_SUCCESS:
            return {
                ...state,
                properties: state.properties.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_PROPERTIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_PROPERTIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_PROPERTIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                properties: state.properties.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_PROPERTIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}
export {
    reducer
}
