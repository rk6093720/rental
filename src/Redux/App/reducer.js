import * as types from "./actionTypes"
const initialState = {
   landlord:[],
   isLoading:false,
   isError:false
}

const reducer = (state = initialState, action) => {
    const  { type, payload } = action;
    switch (type) {

    case types.GET_LANDLORD_REQUEST:
        return { 
            ...state,
            isLoading:true
         }
    case types.GET_LANDLORD_SUCCESS:
        return {
            ...state,
            isLoading:false,
            landlord:payload,
            isError:false,
        }
    case types.GET_LANDLORD_FAILURE:
        return {
            ...state,
            isLoading:false,
            isError:true,
        }
    case types.POST_LANDLORD_REQUEST:
        return {
            ...state,
            isLoading:true,
        }
    case types.POST_LANDLORD_SUCCESS:
        return {
            ...state,
            isLoading:false,
            landlord:[...state.landlord, payload],
            isError:false,
        }
    case types.POST_LANDLORD_FAILURE:
        return {
            ...state,
            isLoading:false,
            isError:true
        }
    case types.EDIT_LANDLORD_REQUEST:
        return{
            ...state,
            isLoading:true,
        }
    case types.EDIT_LANDLORD_SUCCESS:
        return {
            ...state,
            landlord:state.landlord.map((item)=> item.id === payload.id ? payload:item),
            isLoading:false,
            isError:false,
        }
    case types.EDIT_LANDLORD_FAILURE:
        return{
            ...state,
            isLoading:false,
            isError:true,
        }
    default:
        return state
    }
}
export {
    reducer
}
