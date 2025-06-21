import { useState } from "react";
import { useForm } from "react-hook-form";
import { PRIORITY_DEFAULT } from '../constant/priorities'
import { yupResolver } from '@hookform/resolvers/yup';
import { getTodoSchema } from '../schemas/todo';
import TodoFormFields from "../TodoFormFields/TodoFormFields";
import styles from "./TodoForm.module.css";

export default function TodoForm({ onCreate }) {
    const [isShowAll, setShowAll] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(getTodoSchema()),
        defaultValues: {
            description: "",
            deadline: "",
            priority: PRIORITY_DEFAULT,
            completed: false,
        },
    });

    function handleCreate(data) {
        onCreate(data)
        reset()
    }

    return (
        <section>
            <h3 className={styles.Title}>
                New To-Do
                <button onClick={() => setShowAll(!isShowAll)}>
                    {isShowAll ? 'Hide' : 'Show'} all fields
                </button>
            </h3>

            <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>
                <TodoFormFields isShowAll={isShowAll} register={register} errors={errors} />
                <input type="submit" value="Add" />
            </form>
        </section>
    );
}