import { useEffect } from "react";
import Form from "./Form";
import List from "./List";
import {
  addTodo_DB,
  deleteTodo_DB,
  getTodos_DB,
  updateTodo_DB,
} from "../../../apis/APIs";
import {
  addTodo,
  deleteTodo,
  setTodoList,
  toggleTodoIsDone,
} from "../../../redux/modules/todoSlice";
import { Todo, newTodo } from "../../../shared/types";
import { useAppDispatch, useAppSelector } from "../../../util/hooks";
const WORKING_LIST = "Working...🔥";
const DONE_LIST = "Done!";

function TodoMain() {
  const dispatch = useAppDispatch();
  const todoList: Todo[] = useAppSelector((state) => state.todoList);
  const workingList: Todo[] = todoList.filter((todo) => todo.isDone === false);
  const doneList: Todo[] = todoList.filter((todo) => todo.isDone === true);

  const handleTodoDelete = async (todo: Todo) => {
    const agree = confirm("투두를 삭제합니까?");
    if (agree) {
      await deleteTodo_DB(todo.id);
      dispatch(deleteTodo(todo));
    }
    return;
  };

  const handleTodoisDone = async (todo: Todo) => {
    await updateTodo_DB({ ...todo, isDone: !todo.isDone });
    dispatch(toggleTodoIsDone(todo));
  };

  const handleTodoAdd = async (todo: newTodo) => {
    const { id } = await addTodo_DB(todo);
    dispatch(addTodo({ ...todo, id }));
  };

  //TIL
  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const data = await getTodos_DB();
        dispatch(setTodoList(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodoList();
  }, []);

  return (
    <div>
      <Form handleTodoAdd={handleTodoAdd} />
      <List
        title={WORKING_LIST}
        list={workingList}
        handleTodoDelete={handleTodoDelete}
        handleTodoisDone={handleTodoisDone}
      />
      <List
        title={DONE_LIST}
        list={doneList}
        handleTodoDelete={handleTodoDelete}
        handleTodoisDone={handleTodoisDone}
      />
    </div>
  );
}
export default TodoMain;
