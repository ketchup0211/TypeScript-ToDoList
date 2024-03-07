import { useEffect } from "react";
import Form from "./Form";
import List from "./List";
import { getTodos } from "../../../apis/APIs";
import { setTodoList } from "../../../redux/modules/todoSlice";
import { Todo } from "../../../shared/types";
import { useAppDispatch, useAppSelector } from "../../../util/hooks";
const WORKING_LIST = "Working...🔥";
const DONE_LIST = "Done!"

function TodoMain(){
  const dispatch = useAppDispatch();
  const todoList :Todo[] = useAppSelector((state)=>state.todoList);

  useEffect(()=>{
    const fetchTodoList = async() =>{
      try{
        const todoList = await getTodos();
        dispatch(setTodoList(todoList));
      } catch(error){
        console.error(error)
      }
    }
    fetchTodoList();
  },[])

  const workingList:Todo[] = todoList.filter((todo)=>todo.isDone===false);
  
  const doneList:Todo[] = todoList.filter((todo)=>{todo.isDone===true});
  
  return(
    <div>
      <Form/>
      <List title= {WORKING_LIST} list = {workingList}/>
      <List title={DONE_LIST} list = {doneList}/>
    </div>
  )
}
export default TodoMain