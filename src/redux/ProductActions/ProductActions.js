
// Action Creator it is a function which return an Object {Type : '',payload : data}

// import axios from "axios"
import { ACTIONS } from "../ActionTypes"
import fakestoreapi from "../../_apis/Fakestoreapi"

export const setProducts = (products)=>{
    return {
        type : ACTIONS.SET_PRODUCTS,
        payload : products,
    }
}

export const addToCart = (product)=>{
    return {
        type : ACTIONS.ADD_TO_CART,
        payload : product,
    }
}

export const fetchProducts = ()=>{
    //    const response = await  fakestoreapi.get('/products');
    //    return {
    //        type : ACTIONS.FETCH_PRODUCTS,
    //        payload : response,
    //    }
    return async (dispatch)=>{
        const response = await  fakestoreapi.get('/products');
       dispatch({
        type : ACTIONS.FETCH_PRODUCTS,
        payload : response.data,
    }) 
    }
}

