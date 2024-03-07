export type Todo = {
  title : string;
  contents : string;
  idDone : boolean;
  id : number;
}

export type ListProps = {
  title: string;
  list : Todo[];
}