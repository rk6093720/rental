import * as types from "./actionTypes";
import axios from "axios";

const SignupAuth = (e)=>async (dispatch)=>{
  dispatch({ type: types.SIGNUP_REQUEST})
    return await axios.post(`http://localhost:8080/admin/signup`,e)
    .then((r)=>{
        return dispatch({type:types.SIGNUP_SUCCESS, payload:r.data.msg})
    })
    .catch((e)=>{
        return dispatch({type:types.SIGNUP_FAILURE, payload:e.data.msg})
    })
}

const  LoginAuth = (e)=> async(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return await axios.post(`http://localhost:8080/admin/login`,e) 
    .then((r)=>{
       console.log(r);
       return dispatch({type:types.LOGIN_SUCCESS, payload:{token:r.data.data,status:r.data.status}})
    })
    .catch((e)=>{
       return dispatch({ type: types.LOGIN_FAILURE, payload:{statusbar:e.payload.status}})
    })
}
const forgetPassword =(el)=> async(dispatch)=>{
    dispatch({type:types.FORGET_PASSWORD_REQUEST})
    return await axios.post(`http://localhost:8080/admin/forget-password`,el)
    .then((r)=>{
        return dispatch({type:types.FORGET_PASSWORD_SUCCESS, payload:r.data.msg})
    })
    .catch((e)=>{
        return dispatch({type:types.FORGET_PASSWORD_FAILURE, payload:e})
    })

}

const getResetPwd =(id,token)=>async(dispatch)=>{
dispatch({type:types.GET_RESET_PASSWORD_REQUEST})
    return await axios.get(`http://localhost:8080/admin/reset-password/${id}/${token}`)
    .then((r)=>{
        console.log(r)
      return dispatch({type:types.GET_RESET_PASSWORD_SUCCESS,payload:r.data.status})
    })
    .catch((e)=>{
        dispatch({type:types.GET_RESET_PASSWORD_FAILURE,payload:e})
    })


}
const postResetPwd=(id,token,password)=> async(dispatch)=>{
   dispatch({type:types.POST_RESET_PASSWORD_REQUEST})
    return await axios.post(`http://localhost:8080/admin/reset-password/${id}/${token}`,{
        password
    })
    .then((r)=>{
        console.log(r);
        return dispatch({type:types.POST_RESET_PASSWORD_SUCCESS,payload:r.data.email})
    })
    .catch((e)=>{
        return dispatch({type:types.POST_RESET_PASSWORD_FAILURE,payload:e})
    })
}

export {
    SignupAuth,
    LoginAuth,
    forgetPassword,
    getResetPwd,
    postResetPwd

}