import * as types from "./actionTypes"
const initialState = {
    paymentsapp: [],
    payment:[],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.GET_PAYMENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_PAYMENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          paymentsapp: payload,
          payment: payload,
          isError: false,
        };
      case types.GET_PAYMENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.POST_PAYMENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.POST_PAYMENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          paymentsapp: [...state.paymentsapp, payload],
          isError: false,
        };
      case types.POST_PAYMENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.EDIT_PAYMENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.EDIT_PAYMENT_SUCCESS:
        return {
          ...state,
          paymentsapp: state.paymentsapp.map((item) =>
            item._id === payload.id ? payload : item
          ),
          isLoading: false,
          isError: false,
        };
      case types.EDIT_PAYMENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.APPROVE_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.APPROVE_SUCCESS:
        return {
          ...state,
          payment: state.payment.map((item) =>
            item._id === payload.id ? payload : item
          ),
          isLoading: false,
          isError: false,
        };
      case types.APPROVE_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.DELETE_PAYMENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.DELETE_PAYMENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          paymentsapp: state.paymentsapp.filter((land) => land._id !== payload),
          isError: false,
        };
      case types.DELETE_PAYMENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

      default:
        return state;
    }
}
export {
    reducer
}
