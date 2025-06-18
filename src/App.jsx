import styles from './App.module.css'
import TodoForm from './components/TodoForm/TodoForm'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="./todo-icon.png" alt="" className={styles.Logo} />
        <h2 className={styles.Title}>To-Do-App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm />
      </div>
    </div>
  )
}

export default App
