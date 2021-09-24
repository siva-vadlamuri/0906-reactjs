

import { applyMiddleware, createStore } from "redux";
// import thunk from 'red'
import thunk from 'redux-thunk';
import { reducer } from "./reducer";
import { ProductReducer } from "./reducer/ProductReducer";

// import thunk from 'redux-thunk'
// thunk
export const Store = createStore(reducer,applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )