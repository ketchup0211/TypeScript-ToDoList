import styles from './Header.module.css';
function Header() {
  return (
    <header>
      <h1 className={styles.title}>To-Do List</h1>
    </header>
  )
}

export default Header
