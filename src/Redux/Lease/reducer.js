import * as types from "./actionTypes"
const initialState = {
     leases: [],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case types.GET_LEASE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_LEASE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                leases: payload,
                isError: false,
            }
        case types.GET_LEASE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_LEASE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_LEASE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                leases: [...state.leases, payload],
                isError: false,
            }
        case types.POST_LEASE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_LEASE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_LEASE_SUCCESS:
            return {
                ...state,
                leases: state.leases.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_LEASE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_LEASE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_LEASE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                leases: state.leases.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_LEASE_FAILURE:
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
