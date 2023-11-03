
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
    deleteAmount
}