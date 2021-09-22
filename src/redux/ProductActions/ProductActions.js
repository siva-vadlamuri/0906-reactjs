
// Action Creator it is a function which return an Object {Type : '',payload : data}

import { ACTIONS } from "../ActionTypes"

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