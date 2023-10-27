
import * as types from "./actionTypes";
import axios from "axios";

const getTentants = () => async (dispatch) => {
    dispatch({ type: types.GET_TENTANTS_REQUEST })
    return await axios.get("https://repulsive-ruby-snail.cyclic.app/tentants/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_TENTANTS_SUCCESS, payload: r.data.Tentant })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_TENTANTS_FAILURE, payload: e })
        })
}
const postTentants = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_TENTANTS_REQUEST })
    console.log(payload)
    return await axios.post(`https://repulsive-ruby-snail.cyclic.app/tentants/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_TENTANTS_SUCCESS, payload: r.data.AddTentant })
        })
        .catch((e) => {
            dispatch({ type: types.POST_TENTANTS_FAILURE, payload: e })
        })
}

const editTentants = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_TENTANTS_REQUEST });
    return await axios.put(`https://repulsive-ruby-snail.cyclic.app/tentants/update/${id}`, payload)
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
    return await axios.delete(`https://repulsive-ruby-snail.cyclic.app/tentants/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_TENTANTS_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_TENTANTS_FAILURE, payload: e })
        })
}

export {
    getTentants,
    postTentants,
    editTentants,
    deleteTentants
}