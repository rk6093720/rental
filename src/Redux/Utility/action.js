
import * as types from "./actionTypes";
import axios from "axios";

const getUtility = () => async (dispatch) => {
    dispatch({ type: types.GET_UTILITY_REQUEST })
    return await axios.get("http://localhost:8080/utility/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_UTILITY_SUCCESS, payload: r.data.Utility })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_UTILITY_FAILURE, payload: e })
        })
}
const postUtility = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_UTILITY_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/utility/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_UTILITY_SUCCESS, payload: r.data.AddUtility })
        })
        .catch((e) => {
            dispatch({ type: types.POST_UTILITY_FAILURE, payload: e })
        })
}

const editUtility = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_UTILITY_REQUEST });
    return await axios.put(`http://localhost:8080/utility/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_UTILITY_SUCCESS, payload: r.data.editUtility })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_UTILITY_FAILURE, payload: e })
        })
}

const deleteUtility = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_UTILITY_REQUEST });
    return await axios.delete(`http://localhost:8080/utility/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_UTILITY_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_UTILITY_FAILURE, payload: e })
        })
}

export {
    getUtility,
    postUtility,
    editUtility,
    deleteUtility
}