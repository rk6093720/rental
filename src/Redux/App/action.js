
import * as types from "./actionTypes";
import axios from "axios";

const getLandlord = ()=> async(dispatch)=>{
  dispatch({type:types.GET_LANDLORD_REQUEST})
    return await axios.get("http://localhost:8080/landlord/read")
    .then((r)=>{
        console.log(r,"get")
     dispatch({type:types.GET_LANDLORD_SUCCESS, payload:r.data.Landlords})
    })
    .catch((e)=>{
       return  dispatch({type:types.GET_LANDLORD_FAILURE,payload:e})
    })
}
const postLandlord = (payload)=>async(dispatch)=>{
    dispatch({type:types.POST_LANDLORD_REQUEST})
    console.log(payload)  
    return await axios.post(`http://localhost:8080/landlord/create`,payload)
    .then((r)=>{
        console.log(r)
     dispatch({ type: types.POST_LANDLORD_SUCCESS, payload: r.data.Landlord })
    })
    .catch((e)=>{
     dispatch({type:types.POST_LANDLORD_FAILURE,payload:e})
    })
}

const editLandLord = (id,payload) =>async(dispatch)=>{
    dispatch({type:types.EDIT_LANDLORD_REQUEST});
    return await axios.put(`http://localhost:8080/landlord/update/${id}`,payload)
    .then((r)=>{
        console.log(r);
         dispatch({ type: types.EDIT_LANDLORD_SUCCESS, payload: r.data.editLandlord })
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
         dispatch({type:types.DELETE_LANDLORD_SUCCESS,payload:id})
    })
    .catch((e)=>{
        dispatch({type:types.DELETE_LANDLORD_FAILURE,payload:e})
    })
}
const filterLandlord = (filters, sort, pagination) => async(dispatch)=>{
    try {
        dispatch({ type: types.FETCH_LANDLORDS_REQUEST, payload: { filters, sort, pagination } });

        const response = await axios.get("http://localhost:8080/landlord/land-filter", {
            params: { filters, sort, pagination }
        });

        dispatch({
            type: types.FETCH_LANDLORDS_SUCCESS,
            payload: { FilterData: response.data.results, page: response.data.paginationInfo, filters, sort, pagination },
        });
    } catch (error) {
        dispatch({
            type: types.FETCH_LANDLORDS_FAILURE,
            payload: { error },
        });
    }
}
export const setPagination = (pagination) => ({
    type: types.SET_PAGINATION,
    payload: pagination,
});
const getApartment = ()=> async(dispatch)=>{
  dispatch({type:types.GET_APARTMENT_REQUEST})
    return await axios.get("http://localhost:8080/apartment/read")
    .then((r)=>{
        console.log(r,"get")
     dispatch({type:types.GET_APARTMENT_SUCCESS, payload:r.data.data.getData})
    })
    .catch((e)=>{
       return  dispatch({type:types.GET_APARTMENT_FAILURE,payload:e})
    })
}
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
const editApartment = (id,payload) =>async(dispatch)=>{
    dispatch({type:types.EDIT_APARTMENT_REQUEST});
    return await axios.put(`http://localhost:8080/apartment/update/${id}`,payload)
    .then((r)=>{
        console.log(r);
         dispatch({ type: types.EDIT_APARTMENT_SUCCESS, payload: r.data.newApartment })
    })
    .catch((e)=>{
         dispatch({type:types.EDIT_APARTMENT_FAILURE,payload:e})
    })
}

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
    deleteApartment
}