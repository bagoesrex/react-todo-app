import { useState } from "react";
import { PRIORITY_DEFAULT } from '../constant/priorities'
import TodoFormFields from "../TodoFormFields/TodoFormFields";
import styles from "./TodoForm.module.css";

export default function TodoForm({ onCreate }) {
    const [isShowAll, setShowAll] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();

        const { elements } = event.target;

        onCreate({
            name: elements.name?.value ?? "",
            description: elements.description?.value ?? "",
            deadline: elements.deadline?.value ?? "",
            priority: elements.priority?.value ?? PRIORITY_DEFAULT,
            completed: false
        })
    }

    return (
        <section>
            <h3 className={styles.Title}>
                New To-Do
                <button onClick={() => setShowAll(!isShowAll)}>
                    {isShowAll ? 'Hide' : 'Show'} all fields
                </button>
            </h3>

            <form className={styles.Form} onSubmit={handleSubmit}>
                <TodoFormFields isShowAll={isShowAll} />
                <input type="submit" value="Add" />
            </form>
        </section>
    );
}