import store from "../redux/config/configStore";

export type Todo = {
  title : string;
  contents : string;
  isDone : boolean;
  id : number;
}

export type ListProps = {
  title: string;
  list : Todo[];
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch