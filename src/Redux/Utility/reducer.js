import * as types from "./actionTypes"
const initialState = {
    utilities: [],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case types.GET_UTILITY_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_UTILITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                utilities: payload,
                isError: false,
            }
        case types.GET_UTILITY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_UTILITY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_UTILITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                utilities: [...state.utilities, payload],
                isError: false,
            }
        case types.POST_UTILITY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_UTILITY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_UTILITY_SUCCESS:
            return {
                ...state,
                utilities: state.utilities.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_UTILITY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_UTILITY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_UTILITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                utilities: state.utilities.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_UTILITY_FAILURE:
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
