import styles from './TaskItem.module.css';

const TaskItem = ({task,editTask,deleteTask}) => {
    return (
        <li className={`${styles.container} ${task?.completed ? styles.success : styles.default}`}
        onClick={()=>editTask(task.id, !task.completed)}>
            <div className={styles.item}>
                <div className={`${styles.id} ${task?.completed ? styles.success : styles.idDefault}`}>
                    {task.id}
                </div>
                <div className={task?.completed ? styles.contentSuccess : styles.contentDefault}>
                    {task.title}
                </div>
            </div>
            <button className="button-primary">
                x
            </button>
        </li>
    )
}

export default TaskItem