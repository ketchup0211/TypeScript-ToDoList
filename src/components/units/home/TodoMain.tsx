import Form from "./Form";
import List from "./List";
const WORKING_LIST = "Working...🔥";
const DONE_LIST = "Done!"

function TodoMain(){
  return(
    <div>
      <Form/>
      <List title= {WORKING_LIST} list = {[]}/>
      <List title={DONE_LIST} list = {[]}/>
    </div>
  )
}
export default TodoMain