import styles from './Form.module.css'

function Form(){
  return (
    <div className={styles.form_container}>
      <div>
        <span className={styles.form_span}>
          <label htmlFor="todo-title">제목</label>
          <input className={styles.form_input} id="todo-title" type="text"/>
        </span>
        <span className={styles.form_span}>
          <label htmlFor="todo-contents">내용</label>
          <input className={styles.form_input} id="todo-contents" type="text"/>
        </span>
      </div>
      <button className={styles.form_button}>추가하기</button>
    </div>
  );
}

export default Form