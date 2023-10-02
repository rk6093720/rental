
import * as types from "./actionTypes";
import axios from "axios";

const getLandlord = ()=> async(dispatch)=>{
  dispatch({type:types.GET_LANDLORD_REQUEST})
    return await axios.get("http://localhost:8080/landlord/read")
    .then((r)=>{
        console.log(r,"get")
        return dispatch({type:types.GET_LANDLORD_SUCCESS, payload:r.data.Landlords})
    })
    .catch((e)=>{
       return  dispatch({type:types.GET_LANDLORD_FAILURE,payload:e})
    })
}
const postLandlord = (payload)=>async(dispatch)=>{
    dispatch({type:types.POST_LANDLORD_REQUEST})
    console.log(payload)  
    return await axios.post(`http://localhost:8080/landlord/create`,payload,{
        headers: { "Content-Type": "multipart/form-data" },
    })
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
        return dispatch({ type: types.EDIT_LANDLORD_SUCCESS, payload: r.data.editLandlord })
    })
    .catch((e)=>{
         dispatch({type:types.EDIT_LANDLORD_FAILURE,payload:e})
    })
}

const deleteLandLord = (id) => async(dispatch)=>{
      dispatch({type:types.DELETE_LANDLORD_REQUEST});
    return await axios.delete(`http://localhost:8080/landlord/remove/${id}`)
    .then((r)=>{
        console.log(r);
        return dispatch({type:types.DELETE_LANDLORD_SUCCESS,payload:id})
    })
    .catch((e)=>{
        dispatch({type:types.DELETE_LANDLORD_FAILURE,payload:e})
    })
}

export{
    getLandlord,
    postLandlord,
    editLandLord,
    deleteLandLord
}