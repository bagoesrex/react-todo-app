import styles from './App.module.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList';
import TodoFilters from './components/TodoFilters/TodoFilters';
import Alert from './components/Alert/Alert';
import Loader from './components/Loader/Loader';
import { useTodos } from './hooks/todo';

function App() {
  const todos = useTodos()

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="./todo-icon.png" alt="" className={styles.Logo} />
        <h2 className={styles.Title}>To-Do-App</h2>
      </header>

      <div className={styles.AppContainer}>
        {todos.isLoading && <Loader />}
        {!!todos.error.errorMessage && (
          <Alert onClear={todos.error.clear}>{todos.error.errorMessage}</Alert>
        )}
        <TodoForm onCreate={todos.create} />
        <TodoFilters onFilter={todos.filter} />
        <TodoList todos={todos.data} onUpdate={todos.update} onDelete={todos.delete} />
      </div>
    </div>
  )
}

export default App
