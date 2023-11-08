import * as types from "./actionTypes";
const initialState = {
    admin: [],
    isLoading: false,
    isError: false,
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                admin: payload,
                isError: false
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
                admin: [...state.admin, payload],
                isError:false
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
export { reducer }