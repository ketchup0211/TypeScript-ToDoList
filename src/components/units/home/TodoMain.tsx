import { useEffect } from "react";
import Form from "./Form";
import List from "./List";
import { deleteTodo_DB, getTodos_DB } from "../../../apis/APIs";
import { deleteTodo, setTodoList } from "../../../redux/modules/todoSlice";
import { Todo } from "../../../shared/types";
import { useAppDispatch, useAppSelector } from "../../../util/hooks";
const WORKING_LIST = "Working...🔥";
const DONE_LIST = "Done!"

function TodoMain(){
  const dispatch = useAppDispatch();
  const todoList :Todo[] = useAppSelector((state)=>state.todoList);
  const workingList:Todo[] = todoList.filter((todo)=>todo.isDone===false);
  const doneList:Todo[] = todoList.filter((todo)=>todo.isDone===true);

  const handleTodoDelete = async(todo:Todo) =>{
    await deleteTodo_DB(todo.id);
    dispatch(deleteTodo(todo))
  }
  useEffect(()=>{
    const fetchTodoList = async() =>{
      try{
        const todoList = await getTodos_DB();
        dispatch(setTodoList(todoList));
      } catch(error){
        console.error(error)
      }
    }
    fetchTodoList();
  },[])

  return(
    <div>
      <Form/>
      <List title= {WORKING_LIST} list = {workingList} handleTodoDelete={handleTodoDelete}/>
      <List title={DONE_LIST} list = {doneList} handleTodoDelete={handleTodoDelete}/>
    </div>
  )
}
export default TodoMain