import axios from "axios";
import { Todo } from "../shared/types";
const BASE_URL = "http://localhost:4000"

const todosAPI = axios.create({
  baseURL:BASE_URL,
})

export const getTodos_DB = async() : Promise<Todo[]> =>{
  const res = await todosAPI.get("/todos");
  return res.data;
}

export const addTodo_DB = async(newTodo : Todo):Promise<void>=>{
  await todosAPI.post(`/todos/${newTodo.id}`, newTodo);
}

export const updateTodo_DB = async(updatedTodo : Todo):Promise<void>=>{
  await todosAPI.patch(`/todos/${updatedTodo.id}`, updatedTodo);
}

export const deleteTodo_DB = async(id : string):Promise<void>=>{
  await todosAPI.delete(`/todos/${id}`);
}