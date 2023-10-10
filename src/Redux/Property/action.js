
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
            dispatch({ type: types.EDIT_PROPERTY_SUCCESS, payload: r.data })
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
const getUnit = () => async (dispatch) => {
    dispatch({ type: types.GET_UNIT_REQUEST })
    return await axios.get("http://localhost:8080/unit/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_UNIT_SUCCESS, payload: r.data.UNIT })
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
            dispatch({ type: types.POST_UNIT_SUCCESS, payload: r.data.AddUNIT })
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
            dispatch({ type: types.EDIT_UNIT_SUCCESS, payload: r.data })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_UNIT_FAILURE, payload: e })
        })
}
export const addModal = (modalData) => ({
    type: types.ADD_MODAL,
    payload: modalData,
});

export const deleteModal = (modalId) => ({
    type:types.DELETE_MODAL,
    payload: modalId,
});
export const addPaymentModal = (modalData) => ({
    type: types.ADD_PAYMENT_MODAL,
    payload: modalData,
});

export const deletePaymentModal = (modalId) => ({
    type: types.DELETE_PAYMENT_MODAL,
    payload: modalId,
});

export const addExtraModal = (modalData) => ({
    type: types.ADD_EXTRA_MODAL,
    payload: modalData,
});

export const deleteExtraModal = (modalId) => ({
    type: types.DELETE_EXTRA_MODAL,
    payload: modalId,
});

export const addLateFineModal = (modalData) => ({
    type: types.ADD_LATEFINE_MODAL,
    payload: modalData,
});

export const deleteLateFineModal = (modalId) => ({
    type: types.DELETE_LATEFINE_MODAL,
    payload: modalId,
});

export const addUtilityModal = (modalData) => ({
    type: types.ADD_UTILITY_MODAL,
    payload: modalData,
});

export const deleteUtilityModal = (modalId) => ({
    type: types.DELETE_UTILITY_MODAL,
    payload: modalId,
});

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

export {
    getProperty,
    postProperty,
    editProperty,
    deleteProperty,
    getUnit,
    postUnit,
    editUnit,
    deleteUnit
}