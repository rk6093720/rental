
import * as types from "./actionTypes";
import axios from "axios";

const getSystem = () => async (dispatch) => {
    dispatch({ type: types.GET_SYSTEM_REQUEST })
    return await axios.get("http://localhost:8080/system/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_SYSTEM_SUCCESS, payload: r.data.System })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_SYSTEM_FAILURE, payload: e })
        })
}
const postSystem = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_SYSTEM_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/system/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_SYSTEM_SUCCESS, payload: r.data.newSystem })
        })
        .catch((e) => {
            dispatch({ type: types.POST_SYSTEM_FAILURE, payload: e })
        })
}

const editSystem = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_SYSTEM_REQUEST });
    return await axios.put(`http://localhost:8080/system/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_SYSTEM_SUCCESS, payload: r.data.editSystem })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_SYSTEM_FAILURE, payload: e })
        })
}

const deleteSystem = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_SYSTEM_REQUEST });
    return await axios.delete(`http://localhost:8080/system/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_SYSTEM_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_SYSTEM_FAILURE, payload: e })
        })
}
const getProperties = () => async (dispatch) => {
    dispatch({ type: types.GET_PROPERTIES_REQUEST })
    return await axios.get("http://localhost:8080/properties/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_PROPERTIES_SUCCESS, payload: r.data.Properties })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_PROPERTIES_FAILURE, payload: e })
        })
}
const postProperties = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_PROPERTIES_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/properties/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_PROPERTIES_SUCCESS, payload: r.data.AddProperties })
        })
        .catch((e) => {
            dispatch({ type: types.POST_PROPERTIES_FAILURE, payload: e })
        })
}

const editProperties = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_PROPERTIES_REQUEST });
    return await axios.put(`http://localhost:8080/properties/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_PROPERTIES_SUCCESS, payload: r.data.editProperties })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_PROPERTIES_FAILURE, payload: e })
        })
}

const deleteProperties = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_PROPERTIES_REQUEST });
    return await axios.delete(`http://localhost:8080/properties/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_PROPERTIES_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_PROPERTIES_FAILURE, payload: e })
        })
}
const getAmenities = () => async (dispatch) => {
    dispatch({ type: types.GET_AMENITIES_REQUEST })
    return await axios.get("http://localhost:8080/amenities/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_AMENITIES_SUCCESS, payload: r.data.Amenities })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_AMENITIES_FAILURE, payload: e })
        })
}
const postAmenities = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_AMENITIES_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/amenities/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_AMENITIES_SUCCESS, payload: r.data.AddAmenities })
        })
        .catch((e) => {
            dispatch({ type: types.POST_AMENITIES_FAILURE, payload: e })
        })
}

const editAmenities = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_AMENITIES_REQUEST });
    return await axios.put(`http://localhost:8080/amenities/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_AMENITIES_SUCCESS, payload: r.data.editAmenities })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_AMENITIES_FAILURE, payload: e })
        })
}

const deleteAmenities = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_AMENITIES_REQUEST });
    return await axios.delete(`http://localhost:8080/amenities/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_AMENITIES_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_AMENITIES_FAILURE, payload: e })
        })
}
const getUtilities = () => async (dispatch) => {
    dispatch({ type: types.GET_UTILITIES_REQUEST })
    return await axios.get("http://localhost:8080/utilities/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_UTILITIES_SUCCESS, payload: r.data.Utilities })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_UTILITIES_FAILURE, payload: e })
        })
}
const postUtilities = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_UTILITIES_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/utilities/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_UTILITIES_SUCCESS, payload: r.data.AddUtilities })
        })
        .catch((e) => {
            dispatch({ type: types.POST_UTILITIES_FAILURE, payload: e })
        })
}

const editUtilities = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_UTILITIES_REQUEST });
    return await axios.put(`http://localhost:8080/utilities/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_UTILITIES_SUCCESS, payload: r.data.editUtilities })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_UTILITIES_FAILURE, payload: e })
        })
}

const deleteUtilities = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_UTILITIES_REQUEST });
    return await axios.delete(`http://localhost:8080/utilities/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_UTILITIES_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_PROPERTIES_FAILURE, payload: e })
        })
}
const getUnit = () => async (dispatch) => {
    dispatch({ type: types.GET_UNIT_REQUEST })
    return await axios.get("http://localhost:8080/unit/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_UNIT_SUCCESS, payload: r.data.Unit })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_UNIT_FAILURE, payload: e })
        })
}
const postUnit = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_UNIT_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/unit/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_UNIT_SUCCESS, payload: r.data.AddUnit })
        })
        .catch((e) => {
            dispatch({ type: types.POST_UNIT_FAILURE, payload: e })
        })
}

const editUnit = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_UNIT_REQUEST });
    return await axios.put(`http://localhost:8080/unit/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_UNIT_SUCCESS, payload: r.data.editUnit })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_UNIT_FAILURE, payload: e })
        })
}

const deleteUnit = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_UNIT_REQUEST });
    return await axios.delete(`http://localhost:8080/unit/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_UNIT_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_UNIT_FAILURE, payload: e })
        })
}
const getAmount = () => async (dispatch) => {
    dispatch({ type: types.GET_AMOUNT_REQUEST })
    return await axios.get("http://localhost:8080/amount/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_AMOUNT_SUCCESS, payload: r.data.Amount })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_AMOUNT_FAILURE, payload: e })
        })
}
const postAmount = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_AMOUNT_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/amount/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_AMOUNT_SUCCESS, payload: r.data.AddAmount })
        })
        .catch((e) => {
            dispatch({ type: types.POST_AMOUNT_FAILURE, payload: e })
        })
}

const editAmount = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_AMOUNT_REQUEST });
    return await axios.put(`http://localhost:8080/amount/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_AMOUNT_SUCCESS, payload: r.data.editAmount })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_AMOUNT_FAILURE, payload: e })
        })
}

const deleteAmount = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_AMOUNT_REQUEST });
    return await axios.delete(`http://localhost:8080/amount/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_AMOUNT_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_AMOUNT_FAILURE, payload: e })
        })
}
const getUserRole = () => async (dispatch) => {
    dispatch({ type: types.GET_USER_ROLE_REQUEST })
    return await axios.get("http://localhost:8080/user-Role/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_USER_ROLE_SUCCESS, payload: r.data.UserRole })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_USER_ROLE_FAILURE, payload: e })
        })
}
const postUserRole = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_USER_ROLE_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/user-Role/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_USER_ROLE_SUCCESS, payload: r.data.AddUserRole })
        })
        .catch((e) => {
            dispatch({ type: types.POST_USER_ROLE_FAILURE, payload: e })
        })
}

const putUserRole = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_USER_ROLE_REQUEST });
    return await axios.put(`http://localhost:8080/user-Role/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_USER_ROLE_SUCCESS, payload: r.data.editUserRole })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_USER_ROLE_FAILURE, payload: e })
        })
}

const deleteUserRole = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_USER_ROLE_REQUEST });
    return await axios.delete(`http://localhost:8080/user-Role/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_USER_ROLE_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_USER_ROLE_FAILURE, payload: e })
        })
}
const getRole = () => async (dispatch) => {
    dispatch({ type: types.GET_ROLE_REQUEST })
    return await axios.get("http://localhost:8080/role/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_ROLE_SUCCESS, payload: r.data.Role })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_ROLE_FAILURE, payload: e })
        })
}
const postRole = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_ROLE_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/role/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_ROLE_SUCCESS, payload: r.data.AddRole })
        })
        .catch((e) => {
            dispatch({ type: types.POST_ROLE_FAILURE, payload: e })
        })
}

const putRole = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_ROLE_REQUEST });
    return await axios.put(`http://localhost:8080/role/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_ROLE_SUCCESS, payload: r.data.editRole })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_ROLE_FAILURE, payload: e })
        })
}

const deleteRole = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_ROLE_REQUEST });
    return await axios.delete(`http://localhost:8080/role/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_ROLE_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_ROLE_FAILURE, payload: e })
        })
}
const getPermission = () => async (dispatch) => {
    dispatch({ type: types.GET_PERMISSION_REQUEST })
    return await axios.get("http://localhost:8080/permission/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_PERMISSION_SUCCESS, payload: r.data.Permission })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_PERMISSION_FAILURE, payload: e })
        })
}
const postPermission = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_PERMISSION_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/permission/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_PERMISSION_SUCCESS, payload: r.data.AddPermission })
        })
        .catch((e) => {
            dispatch({ type: types.POST_PERMISSION_FAILURE, payload: e })
        })
}

const putPermission = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_PERMISSION_REQUEST });
    return await axios.put(`http://localhost:8080/permission/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_PERMISSION_SUCCESS, payload: r.data.editPermission })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_PERMISSION_FAILURE, payload: e })
        })
}

const deletePermission = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_PERMISSION_REQUEST });
    return await axios.delete(`http://localhost:8080/permission/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_PERMISSION_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_PERMISSION_FAILURE, payload: e })
        })
}
const getTentants = () => async (dispatch) => {
    dispatch({ type: types.GET_TENTANTS_REQUEST })
    return await axios.get("http://localhost:8080/tentantsSystem/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_TENTANTS_SUCCESS, payload: r.data.Tentants })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_TENTANTS_FAILURE, payload: e })
        })
}
const postTentants = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_TENTANTS_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/tentantsSystem/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_TENTANTS_SUCCESS, payload: r.data.AddTentants })
        })
        .catch((e) => {
            dispatch({ type: types.POST_TENTANTS_FAILURE, payload: e })
        })
}

const editTentants = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_TENTANTS_REQUEST });
    return await axios.put(`http://localhost:8080/tentantsSystem/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_TENTANTS_SUCCESS, payload: r.data.editTentants })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_TENTANTS_FAILURE, payload: e })
        })
}

const deleteTentants = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_TENTANTS_REQUEST });
    return await axios.delete(`http://localhost:8080/tentantsSystem/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_TENTANTS_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_TENTANTS_FAILURE, payload: e })
        })
}
const getLease = () => async (dispatch) => {
    dispatch({ type: types.GET_LEASETYPES_REQUEST })
    return await axios.get("http://localhost:8080/system_lease/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_LEASETYPES_SUCCESS, payload: r.data.Lease })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_LEASETYPES_FAILURE, payload: e })
        })
}
const postLease = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_LEASETYPES_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/system_lease/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_LEASETYPES_SUCCESS, payload: r.data.AddLease })
        })
        .catch((e) => {
            dispatch({ type: types.POST_LEASETYPES_FAILURE, payload: e })
        })
}

const editLease = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_LEASETYPES_REQUEST });
    return await axios.put(`http://localhost:8080/system_lease/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_LEASETYPES_SUCCESS, payload: r.data.editLease })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_LEASETYPES_FAILURE, payload: e })
        })
}

const deleteLease = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_LEASETYPES_REQUEST });
    return await axios.delete(`http://localhost:8080/system_lease/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_LEASETYPES_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_LEASETYPES_FAILURE, payload: e })
        })
}
const getExtraCharge = () => async (dispatch) => {
    dispatch({ type: types.GET_EXTRACHARGE_REQUEST })
    return await axios.get("http://localhost:8080/system_extra_charge/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_EXTRACHARGE_SUCCESS, payload: r.data.ExtraCharge })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_EXTRACHARGE_FAILURE, payload: e })
        })
}
const postExtraCharge = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_EXTRACHARGE_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/system_extra_charge/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_EXTRACHARGE_SUCCESS, payload: r.data.AddExtraCharge })
        })
        .catch((e) => {
            dispatch({ type: types.POST_EXTRACHARGE_FAILURE, payload: e })
        })
}

const editExtraCharge = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_EXTRACHARGE_REQUEST });
    return await axios.put(`http://localhost:8080/system_extra_charge/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_EXTRACHARGE_SUCCESS, payload: r.data.editExtraCharge })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_EXTRACHARGE_FAILURE, payload: e })
        })
}

const deleteExtraCharge = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_EXTRACHARGE_REQUEST });
    return await axios.delete(`http://localhost:8080/system_extra_charge/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_EXTRACHARGE_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_EXTRACHARGE_FAILURE, payload: e })
        })
}
export {
    getSystem,
    postSystem,
    editSystem,
    deleteSystem,
    getProperties,
    postProperties,
    editProperties,
    deleteProperties,
    getAmenities,
    postAmenities,
    editAmenities,
    deleteAmenities,
    getUtilities,
    postUtilities,
    editUtilities,
    deleteUtilities,
    getUnit,
    postUnit,
    editUnit,
    deleteUnit,
    getAmount,
    postAmount,
    editAmount,
    deleteAmount,
    getUserRole,
    postUserRole,
    putUserRole,
    deleteUserRole,
    getRole,
    postRole,
    putRole,
    deleteRole,
    getPermission,
    postPermission,
    putPermission,
    deletePermission,
    getTentants,
    postTentants,
    editTentants,
    deleteTentants,
    getLease,
    postLease,
    editLease,
    deleteLease,
    getExtraCharge,
    postExtraCharge,
    editExtraCharge,
    deleteExtraCharge
}