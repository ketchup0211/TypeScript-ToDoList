import { ChangeEvent, useState } from 'react';
import { FormProps,newTodo } from '../../../shared/types';
import styles from './Form.module.css'

function Form({handleTodoAdd}:FormProps){
  const [title, setTitle] =useState<string>("");
  const [contents, setContents] = useState<string>("");
  
  const handleTitleInput = (event:ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    setTitle(event.target.value);
  }

  const handleContentsInput = (event:ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    setContents(event.target.value);
  }

  const handleFormSubmit = () =>{
    handleTodoAdd(todo);
    setTitle("");
    setContents("");
  }

  const todo:newTodo = {title, contents, isDone:false};
  return (
    <div className={styles.form_container}>
      <div>
        <span className={styles.form_span}>
          <label htmlFor="todo-title">제목</label>
          <input 
            className={styles.form_input} 
            id="todo-title" 
            type="text" 
            value={title}
            onChange={handleTitleInput}
          />
        </span>
        <span className={styles.form_span}>
          <label htmlFor="todo-contents">내용</label>
          <input 
            className={styles.form_input} 
            id="todo-contents" 
            type="text" 
            value={contents}
            onChange={handleContentsInput}
          />
        </span>
      </div>
      <button className={styles.form_button} onClick={handleFormSubmit}>추가하기</button>
    </div>
  );
}

export default Form