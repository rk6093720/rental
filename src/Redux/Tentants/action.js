
import * as types from "./actionTypes";
import axios from "axios";
  const adminToken = JSON.parse(localStorage.getItem("Admintoken"));
   const supertoken = JSON.parse(localStorage.getItem("SuperAdmintoken"));
   const token = supertoken?.token?.token;
const getTentants = () => async (dispatch) => {
    dispatch({ type: types.GET_TENTANTS_REQUEST });
  return await axios
    .get("http://localhost:8080/tentants/read/admin", {
      headers: {
        Authorization:`Bearer ${adminToken.token}`,
      },
    })
    .then((r) => {
      console.log(r, "get");
      return dispatch({
        type: types.GET_TENTANTS_SUCCESS,
        payload: r.data.Tentant,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_TENTANTS_FAILURE, payload: e });
    });
}
const superTentants = () => async (dispatch) => {
  dispatch({ type: types.GET_TENTANTS_REQUEST });
  return await axios.get("http://localhost:8080/tentants/read/super",{
      headers: {
        Authorization:`Bearer ${token}`,
        "Content-Type":"application/json"
      },
    })
    .then((r) => {
      console.log(r, "get");
      return dispatch({
        type: types.GET_TENTANTS_SUCCESS,
        payload: r.data.Tentant,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_TENTANTS_FAILURE, payload: e });
    });
};
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
  editNotification,
  superTentants,
};