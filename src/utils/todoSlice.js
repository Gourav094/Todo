import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[
            {id:1,text:"This is first to do list",completed:false}
        ],
    },
    reducers:{
        addTodo:(state,action) => {
            const list = {
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            state.todos.push(list)
        },
        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo:(state,action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const {addTodo,removeTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer