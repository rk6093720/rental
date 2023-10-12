
import * as types from "./actionTypes";
import axios from "axios";

const getProperty = () => async (dispatch) => {
    dispatch({ type: types.GET_PROPERTY_REQUEST })
    return await axios.get("http://localhost:8080/property/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_PROPERTY_SUCCESS, payload: r.data.Property })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_PROPERTY_FAILURE, payload: e })
        })
}
const postProperty = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_PROPERTY_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/property/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_PROPERTY_SUCCESS, payload: r.data.AddProperty })
        })
        .catch((e) => {
            dispatch({ type: types.POST_PROPERTY_FAILURE, payload: e })
        })
}

const editProperty = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_PROPERTY_REQUEST });
    return await axios.put(`http://localhost:8080/property/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_PROPERTY_SUCCESS, payload: r.data.editProperty })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_PROPERTY_FAILURE, payload: e })
        })
}

const deleteProperty = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_PROPERTY_REQUEST });
    return await axios.delete(`http://localhost:8080/property/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_PROPERTY_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_PROPERTY_FAILURE, payload: e })
        })
}

export {
    getProperty,
    postProperty,
    editProperty,
    deleteProperty
}