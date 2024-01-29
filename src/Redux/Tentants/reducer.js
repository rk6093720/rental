import * as types from "./actionTypes"
const initialState = {
    tentants: [],
    notification:[],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.GET_TENTANTS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_TENTANTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          tentants: payload,
          isError: false,
        };
      case types.GET_TENTANTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.POST_TENTANTS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.POST_TENTANTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          tentants: [...state.tentants, payload],
          isError: false,
        };
      case types.POST_TENTANTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.EDIT_TENTANTS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.EDIT_TENTANTS_SUCCESS:
        return {
          ...state,
          tentants: state.tentants.map((item) =>
            item._id === payload.id ? payload : item
          ),
          isLoading: false,
          isError: false,
        };
      case types.EDIT_TENTANTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.DELETE_TENTANTS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.DELETE_TENTANTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          tentants: state.tentants.filter((land) => land._id !== payload),
          isError: false,
        };
      case types.DELETE_TENTANTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.GET_NOTIFICATION_TENTANTS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_NOTIFICATION_TENTANTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          notification: payload,
          isError: false,
        };
      case types.GET_NOTIFICATION_TENTANTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.EDIT_NOTIFICATION_TENTANTS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.EDIT_NOTIFICATION_TENTANTS_SUCCESS:
        return {
          ...state,
          notification: state.notification.map((item) =>
            item._id === payload.id ? payload : item
          ),
          isLoading: false,
          isError: false,
        };
      case types.EDIT_NOTIFICATION_TENTANTS_FAILURE:
      default:
        return state;
    }
}
export {
    reducer
}
