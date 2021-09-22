import { createStore } from "redux";
import { reducer } from "./reducer";
import { ProductReducer } from "./reducer/ProductReducer";

export const Store = createStore(ProductReducer,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )