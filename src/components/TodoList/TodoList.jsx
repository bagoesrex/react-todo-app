import TodoListItem from '../TodoListItem/TodoListItem'
import styles from './TodoList.module.css'

export default function TodoList({ todos }) {
    return (
        <section>
            <h3>To-Do's</h3>

            <ul className={styles.TodoList}>
                {todos.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </section>
    )
}