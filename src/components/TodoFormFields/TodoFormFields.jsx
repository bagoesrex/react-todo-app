import { PRIORITIES, PRIORITY_DEFAULT } from '../constant/priorities'
import styles from "./TodoFormFields.module.css";

export default function TodoFormFields({ isShowAll = true }) {
    return (
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
                            <select defaultValue={PRIORITY_DEFAULT} id="priority" name="priority">
                                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                                    <option key={key} value={key}>{label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}