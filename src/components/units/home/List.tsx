import styles from './List.module.css'

function List(){
  return (
    <div className={styles.list_container}>
      <h3 className={styles.category}>Working</h3>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <div>
          <p className={styles.todo_title}>리액트 공부하기</p>
          <p className={styles.todo_contents}>리액트 기초를 공부해봅시다.</p>
          <div className={styles.button_container}>
            <button>삭제하기</button>
            <button>완료</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List