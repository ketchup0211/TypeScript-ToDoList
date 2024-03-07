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
    toggleTodoIsDone:(state,action:PayloadAction<Todo>)=>{
      return state.map((todo)=>{
        if(todo.id===action.payload.id){
          return {...action.payload, isDone:!action.payload.isDone};
        } return todo;
      })
    }
  }
})

export const {addTodo, deleteTodo, setTodoList, toggleTodoIsDone} = todoSlice.actions;
export default todoSlice.reducer;