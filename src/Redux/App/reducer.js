import * as types from "./actionTypes"
const initialState = {
  landlord: [],
  apartment: [],
  isLoading: false,
  isError: false,
  filters: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  sort: {
    sortBy: "",
    sortOrder: "asc",
  },
  pagination: {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalRecords: 0,
  },
};

const reducer = (state = initialState, action) => {
    const  { type, payload } = action;
    switch (type) {
      case types.GET_LANDLORD_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_LANDLORD_SUCCESS:
        return {
          ...state,
          isLoading: false,
          landlord: payload,
          isError: false,
        };
      case types.GET_LANDLORD_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.SUPERADMIN_APARTMENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.SUPERADMIN_APARTMENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          apartment: payload,
          isError: false,
        };
      case types.SUPERADMIN_APARTMENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.POST_LANDLORD_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.POST_LANDLORD_SUCCESS:
        return {
          ...state,
          isLoading: false,
          landlord: [...state.landlord, payload],
          isError: false,
        };
      case types.POST_LANDLORD_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.EDIT_LANDLORD_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.EDIT_LANDLORD_SUCCESS:
        return {
          ...state,
          landlord: state.landlord.map((item) =>
            item._id === payload.id ? payload : item
          ),
          isLoading: false,
          isError: false,
        };
      case types.EDIT_LANDLORD_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.DELETE_LANDLORD_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.DELETE_LANDLORD_SUCCESS:
        return {
          ...state,
          isLoading: false,
          landlord: state.landlord.filter((land) => land._id !== payload),
          isError: false,
        };
      case types.DELETE_LANDLORD_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.FETCH_LANDLORDS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.FETCH_LANDLORDS_SUCCESS:
        return {
          ...state,
          landlord: payload || [],
          filters: state.payload.filters || {},
          sort: state.payload.sort || {},
          pagination: state.payload.pagination || {},
        };
      case types.FETCH_LANDLORDS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.SET_PAGINATION:
        return {
          ...state,
          pagination: state.payload,
        };
      case types.GET_APARTMENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_APARTMENT_SUCCESS:
        console.log("get", payload);
        return {
          ...state,
          isLoading: false,
          apartment: payload,
          isError: false,
        };
      case types.GET_APARTMENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.POST_APARTMENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.POST_APARTMENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          apartment: [...state.apartment, payload],
          isError: false,
        };
      case types.POST_APARTMENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.EDIT_APARTMENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.EDIT_APARTMENT_SUCCESS:
        console.log("payload", payload);
        return {
          ...state,
          apartment: state.apartment.map((item) =>
            item._id === payload.id ? payload : item
          ),
          isLoading: false,
          isError: false,
        };
      case types.EDIT_APARTMENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.DELETE_APARTMENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.DELETE_APARTMENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          apartment: state.apartment.filter((land) => land._id !== payload),
          isError: false,
        };
      case types.DELETE_APARTMENT_FAILURE:
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
