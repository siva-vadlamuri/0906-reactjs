import { ACTIONS } from "../ActionTypes";


const initalState = {
    products : [],
    cartData : [],
}

export const ProductReducer = (state=initalState,action)=>{
    switch (action.type) {
        case  ACTIONS.SET_PRODUCTS:
           return {...state, cartData : state.cartData, products:action.payload}
        case ACTIONS.FETCH_PRODUCTS:
            return {...state, products: action.payload}   
        
    
        default:
            return state;
    }

}