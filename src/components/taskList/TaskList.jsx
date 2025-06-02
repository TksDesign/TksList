import Taskitem from '../taskItem/TaskItem';
import styles from './TaskList.module.css'

const TaskList = ({
  tasksList,
  editTask,
  deleteTask,
  incompleteTasks,
}) => {
  return (
    <div className='box'>
      <h2 className={styles.title}>
        Il te reste {incompleteTasks} tache a accomplir !
      </h2>
      <ul className={styles.container}>
        composant task item...
        <Taskitem />
        <Taskitem />

      </ul>
    </div>
  )
}
export default TaskList;
// This component is intended to display a list of tasks.