import styles from './Form.module.css'

function Form(){
  return (
    <div className={styles.form_container}>
      <div>
        <span>
          <label htmlFor="todo-title">제목</label>
          <input id="todo-title" type="text"/>
        </span>
        <span>
          <label htmlFor="todo-contents">내용</label>
          <input id="todo-contents" type="text"/>
        </span>
      </div>
      <button>추가하기</button>
    </div>
  );
}

export default Form