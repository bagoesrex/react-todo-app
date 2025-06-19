import { PRIORITIES, PRIORITY_DEFAULT } from '../constant/priorities'
import styles from './TodoListItem.module.css'

export default function TodoListItem({ todo }) {
    return (
        <li className={styles.TodoListItem} data-completed={todo.completed}>
            <div className={styles.Content}>
                <input type="checkbox" name="completed" defaultChecked={todo.completed} className={styles.Status} />

                <div className={styles.Info}>
                    {todo.name}
                    {todo.description && (<span className={styles.Description}>
                        {todo.description}</span>
                    )}

                    <div className={styles.AdditionalInfo}>
                        {todo.deadline} {" "}
                        {todo.priority !== PRIORITY_DEFAULT &&
                            <span style={{ color: PRIORITIES[todo.priority].color }}>
                                {PRIORITIES[todo.priority].label}
                            </span>
                        }
                    </div>
                </div>
            </div>
        </li>
    )
}