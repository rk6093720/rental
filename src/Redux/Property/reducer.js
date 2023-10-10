import * as types from "./actionTypes"
const initialState = {
    properties: [],
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
  
        default:
            return state
    }
}
export {
    reducer
}
