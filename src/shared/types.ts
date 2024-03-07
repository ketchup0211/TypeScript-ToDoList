import store from "../redux/config/configStore";

export type Todo = {
  title : string;
  contents : string;
  isDone : boolean;
  id : string;
}

export type ListProps = {
  title: string;
  list : Todo[];
  handleTodoDelete : (todo:Todo)=>void;
  handleTodoisDone : (todo:Todo)=>void;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch