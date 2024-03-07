import styles from './List.module.css'
import { ListProps } from '../../../shared/types';

function List({title, list}:ListProps){
  return (
    <div className={styles.list_container}>
      <h3 className={styles.category}>{title}</h3>
      <div className={styles.card_container}>
        {list.map((todo)=>(
          <div className={styles.card}>
            <div>
              <p className={styles.todo_title}>{todo.title}</p>
              <p className={styles.todo_contents}>{todo.contents}</p>
              <div className={styles.button_container}>
                <button>삭제하기</button>
                <button>완료</button>
              </div>
            </div>
          </div>
          ))
        }

      </div>
    </div>
  );
}

export default List