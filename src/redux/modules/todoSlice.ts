import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../shared/types";

const initialState : Todo[] = [];

const todoSlice = createSlice({
  name:"todoList",
  initialState,
  reducers:{
    addTodo: (state, action:PayloadAction<Todo>) =>{
      state = [...state, action.payload]
    },
    deleteTodo:(state,action:PayloadAction<Todo>)=>{
      state = state.filter((todo)=>{todo.id!==action.payload.id})
    },
  }
})

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;