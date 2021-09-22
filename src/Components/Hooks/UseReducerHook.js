import React,{useReducer,useState} from 'react'
import { addTodo, deleteTodo } from '../reducer/ActionCreators';

import {ACTIONTYPE} from '../reducer/ACTIONTYPES'


function UseReducerHook() {
    // reducer which is used to change the state
    

    // Action Creator it is function which returns an Object 

   

    const reducer = (state,action)=>{
        // console.log(`action is ${JSON.stringify(action)}`)
        switch(action.type){
            case ACTIONTYPE.ADD_TODO:
                return  [...state,action.payload]
            case ACTIONTYPE.DELETE_TODO:
                return state.filter((todo)=>{
                    if(todo.id!==action.payload){
                        return todo;
                    }
                })    
        }

    }

    const [text, setText] = useState('')
    
    const [todos,dispatch]  = useReducer(reducer,[]);

    const handleClick = (e)=>{
       e.preventDefault();
    //    dispatch('increment')
    // console.log(addTodo({id : Date.now(),name : text}))
       dispatch(addTodo({id : Date.now(),name : text}))
       setText('');

    }
    const deleteTheTodo = (id)=>{
        console.log(deleteTodo(id))
        dispatch(deleteTodo(id))
    }
    // Action Creator is a function which  return an object 
    return (
        <div>
            <div className="container my-2 text-center">
                <form>
                    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
                    <button className="btn btn-info ml-2" onClick={handleClick}>Add Todo</button>
                </form>

                  {
                      console.log(todos)
                  }
                {
                    todos.map((todo)=>(
                        <div key={todo.id} className="my-2">
                            {/* <span>{todo.id}</span> */}
                        <span>{todo.name}</span> 
                        <button className="btn btn-danger ml-2" onClick={()=>{deleteTheTodo(todo.id)}}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UseReducerHook
