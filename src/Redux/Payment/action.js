
import * as types from "./actionTypes";
import axios from "axios";

const getPayment = () => async (dispatch) => {
    dispatch({ type: types.GET_PAYMENT_REQUEST })
    return await axios.get("https://repulsive-ruby-snail.cyclic.app/payment/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_PAYMENT_SUCCESS, payload: r.data.Payment })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_PAYMENT_FAILURE, payload: e })
        })
}
const postPayment = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_PAYMENT_REQUEST })
    console.log(payload)
    return await axios.post(`https://repulsive-ruby-snail.cyclic.app/payment/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_PAYMENT_SUCCESS, payload: r.data.AddPayment })
        })
        .catch((e) => {
            dispatch({ type: types.POST_PAYMENT_FAILURE, payload: e })
        })
}

const editPayment = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_PAYMENT_REQUEST });
    return await axios.put(`https://repulsive-ruby-snail.cyclic.app/payment/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_PAYMENT_SUCCESS, payload: r.data.editPayment })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_PAYMENT_FAILURE, payload: e })
        })
}

const deletePayment = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_PAYMENT_REQUEST });
    return await axios.delete(`https://repulsive-ruby-snail.cyclic.app/payment/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_PAYMENT_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_PAYMENT_FAILURE, payload: e })
        })
}

export {
    getPayment,
    postPayment,
    editPayment,
    deletePayment
}