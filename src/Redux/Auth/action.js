import * as types from "./actionTypes";
import axios from "axios";

const SignupAuth = (e)=>async (dispatch)=>{
  dispatch({ type: types.SIGNUP_REQUEST})
    return await axios.post(`http://localhost:8080/admin/owner-signup`,e)
    .then((r)=>{
        return dispatch({type:types.SIGNUP_SUCCESS, payload:r.data.msg})
    })
    .catch((e)=>{
        return dispatch({type:types.SIGNUP_FAILURE, payload:e})
    })
}
//superAdmin login
const  LoginAuth = (e)=> async(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return await axios.post(`http://localhost:8080/admin/login`,e) 
    .then((r)=>{
       console.log(r);
       return dispatch({type:types.LOGIN_SUCCESS, payload:{token:r.data.data,status:r.data.status}})
    })
    .catch((e)=>{
       return dispatch({ type: types.LOGIN_FAILURE, payload:{statusbar:e}})
    })
}
//owner and user login
const  ownerUserLogin = (payload)=> async(dispatch)=>{
    try {
        dispatch({type:types.OWNER_LOGIN_REQUEST})
        let endPoint = payload.role !== "User" ? "admin/owner-login" : "admin/user-login";
         const res = await axios.post(`http://localhost:8080/${endPoint}`,payload);
         console.log(res)
         const {token,email,role}= res.data.data;
        console.log(token,email,role,res.data.status,res.data.msg);
       return dispatch({
            type:types.OWNER_LOGIN_SUCCESS,
            payload:{
                token,
                email,
                role,
                msg:res.data.msg,
                statusbar:res.data.status
            }
        })
    } catch (error) {
       // console.log(error.response.data.msg)
       return dispatch({
            type:types.OWNER_LOGIN_FAILURE,
            payload:error.response
        })
    }
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

export const rolesData=(payload)=>({
    type:types.ROLES,
    payload
})

export {
    SignupAuth,
    LoginAuth,
    ownerUserLogin,
    forgetPassword,
    getResetPwd,
    postResetPwd,

}