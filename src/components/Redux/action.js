//Write the action creator functions here
import axios from "axios"
import * as types from "./actionTypes"

export const getProductRequest=()=>{
    return {type:types.GET_PRODUCT_REQUEST}
}

export const getProductSuccess=(payload)=>{
    return {type:types.GET_PRODUCT_SUCCESS,payload}
}

export const getProductFailure=()=>{
    return {type:types.GET_PRODUCT_FAILURE}
}

export const getData=()=>(dispatch)=>{
    dispatch(getProductRequest())
    return axios.get("https://fakestoreapi.com/products").then(res=>dispatch(getProductSuccess(res.data))).catch(e=>dispatch(getProductFailure()))
}
