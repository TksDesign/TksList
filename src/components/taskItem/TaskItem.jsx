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
            <button className="button-primary" style={{fontSize:'12px'}} 
            onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id)
                }}>
                🗑️
            </button>
        </li>
    )
}

export default TaskItem