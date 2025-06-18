import { useState } from "react";
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
            priority: elements.priority?.value ?? "",
            completed: false
        })
    }

    return (
        <section>
            <h3 className={styles.Title}>
                New To-Do
                <button onClick={() => setShowAll(!isShowAll)}>
                    {isShowAll ? 'Show' : 'Hide'} all fields
                </button>
            </h3>

            <form className={styles.Form} onSubmit={handleSubmit}>
                <div className={styles.FormFields}>
                    <div className={styles.FormField}>
                        <input
                            type="text"
                            aria-label="Name"
                            placeholder="Name"
                            name="name"
                            autoComplete="off"
                        />
                    </div>

                    {isShowAll &&
                        <>
                            <div className={styles.FormField}>
                                <textarea
                                    aria-label="Description"
                                    placeholder="Description"
                                    name="description"
                                    rows="3"
                                />
                            </div>

                            <div className={styles.FormGroup}>
                                <div className={styles.FormField}>
                                    <label htmlFor="deadline">Deadline</label>
                                    <input type="date" id="deadline" name="deadline" />
                                </div>

                                <div className={styles.FormField}>
                                    <label htmlFor="priority">Priority</label>
                                    <select defaultValue="none" id="priority" name="priority">
                                        <option value="none">None</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    }

                </div>

                <input type="submit" value="Add" />
            </form>
        </section>
    );
}