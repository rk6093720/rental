
import * as types from "./actionTypes";
import axios from "axios";

const getVacateNotice = () => async (dispatch) => {
    dispatch({ type: types.GET_VACATENOTICE_REQUEST })
    return await axios.get("https://repulsive-ruby-snail.cyclic.app/vacatenotices/read")
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
    return await axios.post(`https://repulsive-ruby-snail.cyclic.app/vacatenotices/create`, payload)
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
    return await axios.put(`https://repulsive-ruby-snail.cyclic.app/vacatenotices/update/${id}`, payload)
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
    return await axios.delete(`https://repulsive-ruby-snail.cyclic.app/vacatenotices/remove/${id}`)
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