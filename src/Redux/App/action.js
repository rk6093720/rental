import * as types from "./actionTypes";
import axios from "axios";
function getUserToken(){
  return JSON.parse(localStorage.getItem("Admintoken"));
}
const getToken = ()=>{
    return JSON.parse(localStorage.getItem("SuperAdmintoken"));
}
const admin = getToken();
const user = getUserToken();
const getLandlord = ()=> async(dispatch)=>{
  dispatch({type:types.GET_LANDLORD_REQUEST})
 return await axios.get("http://localhost:8080/landlord/read/super", {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${getToken()?.token}`
      },
    })
    .then((r) => {
      console.log(r, "get");
      return dispatch({
        type: types.GET_LANDLORD_SUCCESS,
        payload: r.data.Landlords,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_LANDLORD_FAILURE, payload: e });
    });
}
const postLandlord = (payload)=>async(dispatch)=>{
    dispatch({type:types.POST_LANDLORD_REQUEST})
    console.log(payload)  
    return await axios.post(`http://localhost:8080/landlord/create`,payload)
    .then((r)=>{
        console.log(r)
    return dispatch({ type: types.POST_LANDLORD_SUCCESS, payload: r.data.Landlord })
    })
    .catch((e)=>{
    return dispatch({type:types.POST_LANDLORD_FAILURE,payload:e})
    })
}
const editLandLord = (id,payload) =>async(dispatch)=>{
    dispatch({type:types.EDIT_LANDLORD_REQUEST});
    return await axios.put(`http://localhost:8080/landlord/update/${id}`,payload)
    .then((r)=>{
        console.log(r);
      return   dispatch({ type: types.EDIT_LANDLORD_SUCCESS, payload: r.data.editLandlord })
    })
    .catch((e)=>{
      return   dispatch({type:types.EDIT_LANDLORD_FAILURE,payload:e})
    })
}
const deleteLandLord = (id) => async(dispatch)=>{
      dispatch({type:types.DELETE_LANDLORD_REQUEST});
    return await axios.delete(`http://localhost:8080/landlord/remove/${id}`)
    .then((r)=>{
        console.log(r);
         dispatch({type:types.DELETE_LANDLORD_SUCCESS,payload:id})
    })
    .catch((e)=>{
        dispatch({type:types.DELETE_LANDLORD_FAILURE,payload:e})
    })
}
const filterLandlord = (filters, sort, pagination) => async (dispatch) => {
  try {
    dispatch({
      type: types.FETCH_LANDLORDS_REQUEST,
      payload: { filters, sort, pagination },
    });

    const response = await axios.get(
      "http://localhost:8080/landlord/land-filter",
      {
        params: { filters, sort, pagination },
      }
    );

    const { data } = response;

    // Assuming the API response contains properties named `data` and `paginationInfo`
    const { data: FilterData, paginationInfo } = data;

    dispatch({
      type: types.FETCH_LANDLORDS_SUCCESS,
      payload: { FilterData, page: paginationInfo, filters, sort, pagination },
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_LANDLORDS_FAILURE,
      payload: { error },
    });
  }
};

export const setPagination = (pagination) => ({
    type: types.SET_PAGINATION,
    payload: pagination,
});
const getApartment = ()=> async(dispatch)=>{
    dispatch({type:types.GET_APARTMENT_REQUEST});
  return await axios.get("http://localhost:8080/apartment/read/admin", {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${getUserToken()?.token}`
      },
    })
    .then((r) => {
      console.log(r, "get");
      return dispatch({
        type: types.GET_APARTMENT_SUCCESS,
        payload: r.data.data.getData,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_APARTMENT_FAILURE, payload: e });
    });
}
 const superApartment = () => async (dispatch) => {
  dispatch({ type: types.SUPERADMIN_APARTMENT_REQUEST });
  return await axios
    .get("http://localhost:8080/apartment/read/superadmin", {
      headers: {
            "Content-Type": "application/json",
            Authorization:`Bearer ${getToken().token}`
      },
    })
    .then((r) => {
      console.log(r, "get");
      return dispatch({
        type: types.SUPERADMIN_APARTMENT_SUCCESS,
        payload: r?.data?.data?.getData,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.SUPERADMIN_APARTMENT_FAILURE, payload: e });
    });
};
const postApartment = (payload)=>async(dispatch)=>{
    dispatch({type:types.POST_APARTMENT_REQUEST})
    console.log(payload)  
    return await axios.post(`http://localhost:8080/apartment/create`,payload)
    .then((r)=>{
        console.log(r)
     dispatch({ type: types.POST_APARTMENT_SUCCESS, payload: r.data.apartmentdata.newApartment })
    })
    .catch((e)=>{
     dispatch({type:types.POST_APARTMENT_FAILURE,payload:e})
    })
}
const editApartment = (id, payload) => async (dispatch) => {
  dispatch({ type: types.EDIT_APARTMENT_REQUEST });
  console.log("edit", payload);

  try {
    const res = await axios.put(`http://localhost:8080/apartment/update/${id}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("data", res);

    // Assuming that your response contains an `editApartment` property
    const editedApartment = res.data.editApartment;

    dispatch({ type: types.EDIT_APARTMENT_SUCCESS, payload: editedApartment });
  } catch (error) {
    dispatch({ type: types.EDIT_APARTMENT_FAILURE, payload: error });
  }
};

const deleteApartment = (id) => async(dispatch)=>{
      dispatch({type:types.DELETE_APARTMENT_REQUEST});
    return await axios.delete(`http://localhost:8080/apartment/remove/${id}`)
    .then((r)=>{
        console.log(r);
         dispatch({type:types.DELETE_APARTMENT_SUCCESS,payload:id})
    })
    .catch((e)=>{
        dispatch({type:types.DELETE_APARTMENT_FAILURE,payload:e})
    })
}
export{
    getLandlord,
    postLandlord,
    editLandLord,
    deleteLandLord,
    filterLandlord,
    getApartment,
    postApartment,
    editApartment,
    deleteApartment,
    superApartment
}