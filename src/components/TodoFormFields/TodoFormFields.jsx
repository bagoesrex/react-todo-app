import { PRIORITIES, PRIORITY_DEFAULT } from '../constant/priorities'
import styles from "./TodoFormFields.module.css";

export default function TodoFormFields({ todo = {}, isShowAll = true, register, errors = {} }) {
    return (
        <div className={styles.FormFields}>
            <div className={styles.FormField}>
                <input
                    type="text"
                    aria-label="Name"
                    placeholder="Name"
                    autoComplete="off"
                    defaultValue={todo.name}
                    {...register("name", {
                        required: "Name is required",
                        minLength: { value: 3, message: "Nama harus lebih dari 3 karakter" },
                        maxLength: { value: 50, message: "Nama tidak boleh lebih dari 50 karakter" }
                    })}
                />
                {!!errors.name && errors.name.message}
            </div>

            {isShowAll &&
                <>
                    <div className={styles.FormField}>
                        <textarea
                            aria-label="Description"
                            placeholder="Description"
                            rows="3"
                            defaultValue={todo.description}
                            {...register("description", {
                                maxLength: { value: 200, message: "Deskripsi tidak boleh lebih dari 200 karakter" }
                            })}
                        />
                        {!!errors.description && errors.description.message}
                    </div>

                    <div className={styles.FormGroup}>
                        <div className={styles.FormField}>
                            <label htmlFor="deadline">Deadline</label>
                            <input
                                type="date"
                                id="deadline"
                                defaultValue={todo.deadline}
                                onKeyDown={(e) => e.preventDefault()}
                                {...register(
                                    "deadline",
                                    {
                                        min: !todo.id && {
                                            value: new Date().toISOString().split("T")[0],
                                            message: "Deadline tidak boleh tanggal yang sudah lewat"
                                        }
                                    }
                                )}
                            />
                            {!!errors.deadline && errors.deadline.message}
                        </div>

                        <div className={styles.FormField}>
                            <label htmlFor="priority">Priority</label>
                            <select defaultValue={todo.priority ?? PRIORITY_DEFAULT} id="priority" {...register("priority", {
                                validate: (value) =>
                                    Object.keys(PRIORITIES).includes(value) ||
                                    "Priority tidak valid"
                            })}>
                                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                                    <option key={key} value={key}>{label}</option>
                                ))}
                            </select>
                            {!!errors.priority && errors.priority.message}
                        </div>
                    </div>
                </>
            }

        </div>
    )
}