import * as types from "./actionTypes"
const initialState = {
    system: [],
    properties:[],
    amenities:[],
    utilities:[],
    unit:[],
    payment:[],
    users:[],
    usersRoles:[],
    permission:[],
    tentants:[],
    lease_types:[],
    extra_charge:[],
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
        case types.GET_AMENITIES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_AMENITIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                amenities: payload,
                isError: false,
            }
        case types.GET_AMENITIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_AMENITIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_AMENITIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                amenities: [...state.amenities, payload],
                isError: false,
            }
        case types.POST_AMENITIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_AMENITIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_AMENITIES_SUCCESS:
            return {
                ...state,
                amenities: state.amenities.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_AMENITIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_AMENITIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_AMENITIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                amenities: state.amenities.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_AMENITIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_UTILITIES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_UTILITIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                utilities: payload,
                isError: false,
            }
        case types.GET_UTILITIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_UTILITIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_UTILITIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                utilities: [...state.utilities, payload],
                isError: false,
            }
        case types.POST_UTILITIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_UTILITIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_UTILITIES_SUCCESS:
            return {
                ...state,
                utilities: state.utilities.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_UTILITIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_UTILITIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_UTILITIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                utilities: state.utilities.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_UTILITIES_FAILURE:
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
                unit: payload,
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
                unit: [...state.unit, payload],
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
                unit: state.unit.map((item) => item._id === payload.id ? payload : item),
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
                unit: state.unit.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_UNIT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_AMOUNT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_AMOUNT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payment: payload,
                isError: false,
            }
        case types.GET_AMOUNT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_AMOUNT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_AMOUNT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payment: [...state.payment, payload],
                isError: false,
            }
        case types.POST_AMOUNT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_AMOUNT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_AMOUNT_SUCCESS:
            return {
                ...state,
                payment: state.payment.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_AMOUNT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_AMOUNT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_AMOUNT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payment: state.payment.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_AMOUNT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_USER_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_USER_ROLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload,
                isError: false,
            }
        case types.GET_USER_ROLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_USER_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_USER_ROLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: [...state.users, payload],
                isError: false,
            }
        case types.POST_USER_ROLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_USER_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_USER_ROLE_SUCCESS:
            return {
                ...state,
                users: state.users.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_USER_ROLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_USER_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_USER_ROLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: state.users.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_USER_ROLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_ROLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                usersRoles: payload,
                isError: false,
            }
        case types.GET_ROLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_ROLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                usersRoles: [...state.usersRoles, payload],
                isError: false,
            }
        case types.POST_ROLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_ROLE_SUCCESS:
            return {
                ...state,
                usersRoles: state.usersRoles.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_ROLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_ROLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                usersRoles: state.usersRoles.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_ROLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_PERMISSION_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_PERMISSION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                permission: payload,
                isError: false,
            }
        case types.GET_PERMISSION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_PERMISSION_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_PERMISSION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                permission: [...state.permission, payload],
                isError: false,
            }
        case types.POST_PERMISSION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_PERMISSION_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_PERMISSION_SUCCESS:
            return {
                ...state,
                permission: state.permission.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_PERMISSION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_PERMISSION_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_PERMISSION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                permission: state.permission.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_PERMISSION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_TENTANTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_TENTANTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tentants: payload,
                isError: false,
            }
        case types.GET_TENTANTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_TENTANTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_TENTANTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tentants: [...state.tentants, payload],
                isError: false,
            }
        case types.POST_TENTANTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_TENTANTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_TENTANTS_SUCCESS:
            return {
                ...state,
                tentants: state.tentants.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_TENTANTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_TENTANTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_TENTANTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tentants: state.tentants.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_TENTANTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_LEASETYPES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_LEASETYPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                lease_types: payload,
                isError: false,
            }
        case types.GET_LEASETYPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_LEASETYPES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_LEASETYPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                lease_types: [...state.lease_types, payload],
                isError: false,
            }
        case types.POST_LEASETYPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_LEASETYPES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_LEASETYPES_SUCCESS:
            return {
                ...state,
                lease_types: state.lease_types.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_LEASETYPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_LEASETYPES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_LEASETYPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                lease_types: state.lease_types.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_LEASETYPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_EXTRACHARGE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_EXTRACHARGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                extra_charge: payload,
                isError: false,
            }
        case types.GET_EXTRACHARGE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.POST_EXTRACHARGE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_EXTRACHARGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                extra_charge: [...state.extra_charge, payload],
                isError: false,
            }
        case types.POST_EXTRACHARGE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.EDIT_EXTRACHARGE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.EDIT_EXTRACHARGE_SUCCESS:
            return {
                ...state,
                extra_charge: state.extra_charge.map((item) => item._id === payload.id ? payload : item),
                isLoading: false,
                isError: false,
            }
        case types.EDIT_EXTRACHARGE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case types.DELETE_EXTRACHARGE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_EXTRACHARGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                extra_charge: state.extra_charge.filter((land) => land._id !== payload),
                isError: false,
            }
        case types.DELETE_EXTRACHARGE_FAILURE:
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
