import { createSlice, nanoid } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

const initialState = {
    todos : [{
        id : 1,
        text : " First Todo"
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo : (state, action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload ? {...todo, text : action.payload} : todo)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer




































// const initialState = {
//     todos : [{
//         id : 1,
//         text : "Todo Text"
//     }]
// }

// export const todoSlice = createSlice({
//     name : 'todo',
//     initialState,
//     reducers : {
//         addTodo : (state,action) => {
//             const todo = {
//                 id : nanoid(),
//                 text : action.payload
//             }
//             state.todos.push(todo)
//         },
//         removeTodo : (state, action) => {
//             state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
//         },
//         updateTodo : (state, action) => {
//             state.todos = state.todos.map((todo)=> todo.id === action.payload ? {...todo, text : action.payload} : todo)
//         },
//     }
// })

// export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

// export default todoSlice.reducer;









