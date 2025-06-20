import { useState } from 'react'
import styles from './App.module.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList';
import TodoFilters from './components/TodoFilters/TodoFilters';

const TODOS_DUMMY = [
  {
    id: "1",
    name: "Belajar React",
    description: "Mempelajari dasar-dasar komponen dan state di React",
    deadline: "2025-07-01",
    priority: "low",
    completed: false,
  },
  {
    id: "2",
    name: "Kerjakan Tugas Akhir",
    description: "Selesaikan bab 3 dan konsultasikan dengan dosen pembimbing",
    deadline: "2025-07-10",
    priority: "high",
    completed: false,
  },
  {
    id: "3",
    name: "Olahraga Pagi",
    description: "Lari ringan selama 30 menit di sekitar kompleks",
    deadline: "2025-06-25",
    priority: "medium",
    completed: true,
  },
  {
    id: "4",
    name: "Coba Tambahkan Data",
    description: "Item todo percobaan tanpa deadline dan prioritas",
    deadline: "",
    priority: "none",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_DUMMY);
  const [filters, setFilters] = useState({})

  function handleCreate(newTodo) {
    setTodos((prevTodos) => [...prevTodos, { id: `${prevTodos.length + 1}`, ...newTodo }])
  }

  function handleUpdate(id, newTodo) {
    setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? newTodo : todo))
  }

  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  function filtersTodos(todo) {
    const { completed, priority } = filters

    return (
      (completed === "" || todo.completed === completed) && (priority === "" || todo.priority === priority)
    )
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="./todo-icon.png" alt="" className={styles.Logo} />
        <h2 className={styles.Title}>To-Do-App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        <TodoFilters onFilter={setFilters} />
        <TodoList todos={todos.filter(filtersTodos)} onUpdate={handleUpdate} onDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App
