
import * as types from "./actionTypes";
import axios from "axios";

const getPayment = () => async (dispatch) => {
    dispatch({ type: types.GET_PAYMENT_REQUEST })
    return await axios.get("http://localhost:8080/payment/read")
        .then((r) => {
            console.log(r, "get")
            dispatch({ type: types.GET_PAYMENT_SUCCESS, payload: r.data.Payment })
        })
        .catch((e) => {
            return dispatch({ type: types.GET_PAYMENT_FAILURE, payload: e })
        })
}
const postPayment = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_PAYMENT_REQUEST })
    console.log(payload)
    return await axios.post(`http://localhost:8080/payment/create`, payload)
        .then((r) => {
            console.log(r)
            dispatch({ type: types.POST_PAYMENT_SUCCESS, payload: r.data.AddPayment })
        })
        .catch((e) => {
            dispatch({ type: types.POST_PAYMENT_FAILURE, payload: e })
        })
}

const editPayment = (id, payload) => async (dispatch) => {
    dispatch({ type: types.EDIT_PAYMENT_REQUEST });
    return await axios.put(`http://localhost:8080/payment/update/${id}`, payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.EDIT_PAYMENT_SUCCESS, payload: r.data.editPayment })
        })
        .catch((e) => {
            dispatch({ type: types.EDIT_PAYMENT_FAILURE, payload: e })
        })
}
const editApprove = (id, payload) => async (dispatch) => {
  dispatch({ type: types.APPROVE_REQUEST });
  return await axios
    .patch(
      `http://localhost:8080/payment/approve/${id}`,
      payload
    )
    .then((r) => {
      console.log(r);
      dispatch({
        type: types.APPROVE_SUCCESS,
        payload: r.data.editPayment,
      });
    })
    .catch((e) => {
      dispatch({ type: types.APPROVE_FAILURE, payload: e });
    });
};

const deletePayment = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_PAYMENT_REQUEST });
    return await axios.delete(`http://localhost:8080/payment/remove/${id}`)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.DELETE_PAYMENT_SUCCESS, payload: id })
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_PAYMENT_FAILURE, payload: e })
        })
}
const getPaymentDetails =()=> async(dispatch)=>{
    dispatch({ type: types.GET_PAYMENT_REQUEST });
    return await axios
      .get("http://localhost:8080/payment/screentshot/read")
      .then((r) => {
        console.log(r, "get");
        dispatch({ type: types.GET_PAYMENT_SUCCESS, payload: r.data.payment });
      })
      .catch((e) => {
        return dispatch({ type: types.GET_PAYMENT_FAILURE, payload: e });
      });
}
const getInvoice = () => async (dispatch) => {
  dispatch({ type: types.GET_INVOICE_REQUEST });
  return await axios
    .get("http://localhost:8080/invoice/read")
    .then((r) => {
      console.log(r, "get");
      dispatch({ type: types.GET_INVOICE_SUCCESS, payload: r.data.Invoice });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_INVOICE_FAILURE, payload: e });
    });
};
const postInvoice = () => async (dispatch) => {
  dispatch({ type: types.POST_INVOICE_REQUEST });
  return await axios
    .get("http://localhost:8080/invoice/create")
    .then((r) => {
      console.log(r, "get");
      dispatch({ type: types.POST_INVOICE_SUCCESS, payload: r.data.AddInvoice });
    })
    .catch((e) => {
      return dispatch({ type: types.POST_INVOICE_FAILURE, payload: e });
    });
};
const editInvoice = (id, payload) => async (dispatch) => {
  dispatch({ type: types.EDIT_INVOICE_REQUEST });
  return await axios
    .patch(`http://localhost:8080/invoice/update/${id}`, payload)
    .then((r) => {
      console.log(r);
      dispatch({
        type: types.EDIT_INVOICE_SUCCESS,
        payload: r.data.editPayment,
      });
    })
    .catch((e) => {
      dispatch({ type: types.EDIT_INVOICE_FAILURE, payload: e });
    });
};

const deleteInvoice = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_INVOICE_REQUEST });
  return await axios
    .delete(`http://localhost:8080/invoice/remove/${id}`)
    .then((r) => {
      console.log(r);
      dispatch({ type: types.DELETE_INVOICE_SUCCESS, payload: id });
    })
    .catch((e) => {
      dispatch({ type: types.DELETE_INVOICE_FAILURE, payload: e });
    });
};
export {
  getPayment,
  postPayment,
  editPayment,
  deletePayment,
  getPaymentDetails,
  editApprove,
  getInvoice,
  postInvoice,
  editInvoice,
  deleteInvoice
};