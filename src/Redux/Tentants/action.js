
import * as types from "./actionTypes";
import axios from "axios";
// const user = JSON.parse(localStorage.getItem("Usertoken"));
// const admin = JSON.parse(localStorage.getItem("Admintoken"));
// const superAdmin = JSON.parse(localStorage.getItem("SuperAdmintoken"));
// const token = superAdmin && superAdmin?.token?.token;
// console.log(admin)
const getTentants = () => async (dispatch) => {
    dispatch({ type: types.GET_TENTANTS_REQUEST });
    let headers = {
      "Content-Type": "application/json",
    };

    // Get the user's token and role from localStorage
    const userToken = JSON.parse(localStorage.getItem("Usertoken"));
    const adminToken = JSON.parse(localStorage.getItem("Admintoken"));
    const superAdminToken = JSON.parse(localStorage.getItem("SuperAdmintoken"));
    console.log(superAdminToken.token.token)
    // Check if a super admin is logged in
    if (superAdminToken && superAdminToken.token.role === "SuperAdmin") {
      headers.Authorization = `Bearer ${superAdminToken.token.token}`;
    }
    // Check if an admin is logged in
    else if (adminToken && adminToken.role === "Admin") {
      headers.Authorization = `Bearer ${adminToken.token}`;
    }
    // Check if a regular user is logged in
    else if (userToken && userToken.role === "User") {
      headers.Authorization = `Bearer ${userToken.token}`;
    }
  return  await axios.get("http://localhost:8080/tentants/read",
    {headers})
      .then((r) => {
        console.log(r, "get");
     return dispatch({ type: types.GET_TENTANTS_SUCCESS, payload: r.data.Tentant });
      })
      .catch((e) => {
        return dispatch({ type: types.GET_TENTANTS_FAILURE, payload: e });
      });
}
const postTentants = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_TENTANTS_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/tentants/create`, payload)
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
     const userToken = JSON.parse(localStorage.getItem("Usertoken"));
    return await axios
      .put(`http://localhost:8080/tentants/update/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${userToken.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((r) => {
        console.log(r);
        dispatch({
          type: types.EDIT_TENTANTS_SUCCESS,
          payload: r.data.editTentants,
        });
      })
      .catch((e) => {
        dispatch({ type: types.EDIT_TENTANTS_FAILURE, payload: e });
      });
}

const deleteTentants = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_TENTANTS_REQUEST });
    return await axios.delete(`http://localhost:8080/tentants/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_TENTANTS_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_TENTANTS_FAILURE, payload: e })
        })
}
const getNotification = () => async (dispatch) => {
  dispatch({ type: types.GET_NOTIFICATION_TENTANTS_REQUEST });
    const adminToken = JSON.parse(localStorage.getItem("Admintoken"));
  return await axios
    .get("http://localhost:8080/tentants/notification/read",{
      headers:{
        Authorization:`Bearer ${adminToken.token}`,
        "Content-Type":"application/json"
      }
    })
    .then((r) => {
      console.log(r, "get");
      dispatch({
        type: types.GET_NOTIFICATION_TENTANTS_SUCCESS,
        payload: r.data.notification,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_NOTIFICATION_TENTANTS_FAILURE, payload: e });
    });
};
// const postNotification = (payload) => async (dispatch) => {
//   dispatch({ type: types.POST_TENTANTS_REQUEST });
//   console.log(payload);
//   return await axios
//     .post(`http://localhost:8080/tentants/create`, payload)
//     .then((r) => {
//       console.log(r);
//       dispatch({
//         type: types.POST_TENTANTS_SUCCESS,
//         payload: r.data.AddTentant,
//       });
//     })
//     .catch((e) => {
//       dispatch({ type: types.POST_TENTANTS_FAILURE, payload: e });
//     });
// };
const editNotification = (id, payload) => async (dispatch) => {
  dispatch({ type: types.EDIT_TENTANTS_REQUEST });
  return await axios
    .patch(`http://localhost:8080/tentants/notification/update/${id}`, payload)
    .then((r) => {
      console.log(r);
      dispatch({
        type: types.EDIT_TENTANTS_SUCCESS,
        payload: r.data.editTentants,
      });
    })
    .catch((e) => {
      dispatch({ type: types.EDIT_TENTANTS_FAILURE, payload: e });
    });
};
export {
  getTentants,
  postTentants,
  editTentants,
  deleteTentants,
  getNotification,
  // postNotification,
editNotification
};