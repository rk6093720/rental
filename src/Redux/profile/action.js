import * as types from "./actionTypes";
import axios from "axios";

const getProfile = () => async (dispatch) => {
    dispatch({ type: types.GET_PROFILE_REQUEST })
    return await axios.get("http://localhost:8080/profile-data/read")
        .then((r) => {
            console.log(r)
             dispatch({ type: types.GET_PROFILE_SUCCESS, payload: r.data.Profile })
        })
        .catch((e) => {
            dispatch({ type: types.GET_PROFILE_FAILURE, payload: e })
        })


}
const postProfile = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_PROFILE_REQUEST })
    return await axios.post(`http://localhost:8080/profile-data/create`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.POST_PROFILE_SUCCESS, payload: r.data.AddProfile })
        })
        .catch((e) => {
             dispatch({ type: types.POST_PROFILE_FAILURE, payload: e })
        })
}

export {
    getProfile,
    postProfile
}