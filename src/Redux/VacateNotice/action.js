
import * as types from "./actionTypes";
import axios from "axios";

const getVacateNotice = () => async (dispatch) => {
    dispatch({ type: types.GET_VACATENOTICE_REQUEST })
    return await axios.get("http://localhost:8080/vacatenotices/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_VACATENOTICE_SUCCESS, payload: r.data.vacate })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_VACATENOTICE_FAILURE, payload: e })
        })
}
const postVacateNotice = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_VACATENOTICE_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/vacatenotices/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_VACATENOTICE_SUCCESS, payload: r.data.AddVacate })
        })
        .catch((e) => {
            dispatch({ type: types.POST_VACATENOTICE_FAILURE, payload: e })
        })
}

const editVacateNotice = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_VACATENOTICE_REQUEST });
    return await axios.put(`http://localhost:8080/vacatenotices/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_VACATENOTICE_SUCCESS, payload: r.data.editVacate })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_VACATENOTICE_FAILURE, payload: e })
        })
}

const deleteVacateNotice = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_VACATENOTICE_REQUEST });
    return await axios.delete(`http://localhost:8080/vacatenotices/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_VACATENOTICE_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_VACATENOTICE_FAILURE, payload: e })
        })
}

export {
    getVacateNotice,
    postVacateNotice,
    editVacateNotice,
    deleteVacateNotice
}