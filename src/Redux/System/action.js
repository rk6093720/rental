
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
export {
    getSystem,
    postSystem,
    editSystem,
    deleteSystem,
    getProperties,
    postProperties,
    editProperties,
    deleteProperties
}