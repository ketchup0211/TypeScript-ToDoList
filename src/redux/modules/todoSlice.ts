import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../shared/types";

const initialState : Todo[] = [];

const todoSlice = createSlice({
  name:"todoList",
  initialState,
  reducers:{
    setTodoList : (state, action:PayloadAction<Todo[]>)=>{
      return action.payload;
    },
    addTodo: (state, action:PayloadAction<Todo>) =>{
      state.push(action.payload) 
    },
    deleteTodo:(state,action:PayloadAction<Todo>)=>{
      return state.filter((todo)=>{todo.id!==action.payload.id})
    },
  }
})

export const {addTodo, deleteTodo, setTodoList} = todoSlice.actions;
export default todoSlice.reducer;