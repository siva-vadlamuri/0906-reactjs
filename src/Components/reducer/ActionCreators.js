import { ACTIONTYPE } from "./ACTIONTYPES"

export const addTodo = (todo)=>{
    return {
        type : ACTIONTYPE.ADD_TODO,
        payload : todo,
    }
}

export const deleteTodo = (id)=>{
    return {
        type : ACTIONTYPE.DELETE_TODO,
        payload : id,
    }
}