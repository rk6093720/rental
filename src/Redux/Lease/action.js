
import * as types from "./actionTypes";
import axios from "axios";

const getLease = () => async (dispatch) => {
    dispatch({ type: types.GET_LEASE_REQUEST })
    return await axios.get("http://localhost:8080/leases/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_LEASE_SUCCESS, payload: r.data.Lease })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_LEASE_FAILURE, payload: e })
        })
}
const postLease = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_LEASE_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/leases/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_LEASE_SUCCESS, payload: r.data.AddLease })
        })
        .catch((e) => {
            dispatch({ type: types.POST_LEASE_FAILURE, payload: e })
        })
}

const editLease = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_LEASE_REQUEST });
    return await axios.put(`http://localhost:8080/leases/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_LEASE_SUCCESS, payload: r.data.editLease })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_LEASE_FAILURE, payload: e })
        })
}

const deleteLease = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_LEASE_REQUEST });
    return await axios.delete(`http://localhost:8080/leases/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_LEASE_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_LEASE_FAILURE, payload: e })
        })
}

export {
    getLease,
    postLease,
    editLease,
    deleteLease
}