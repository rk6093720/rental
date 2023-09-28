
import * as types from "./actionTypes";
import axios from "axios";

const getLandlord = ()=> async(dispatch)=>{
  dispatch({type:types.GET_LANDLORD_REQUEST})
    return await axios.get("http://localhost:8080/landlord/read")
    .then((r)=>{
        console.log(r,"get")
        return dispatch({type:types.GET_LANDLORD_SUCCESS, payload:r.data.Landlord})
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

const editLandLord = () =>(dispatch)=>{

}
export{
    getLandlord,
    postLandlord,
    editLandLord
}