import Taskitem from '../taskItem/TaskItem';
import styles from './TaskList.module.css'

const TaskList = ({
  tasksList,
  incompleteTasks,
  editTask,
  deleteTask,
}) => {
  // Afficher les de taches 
  const TasksList=tasksList.map((task)=>(
    <Taskitem key={task.id}/>
  ));
  return (
    <div className='box'>
      <h2 className={styles.title}>
        Il te reste {incompleteTasks} tache a accomplir !
      </h2>
       {tasksList && tasksList.length > 0 &&(
      <ul className={styles.container}>
        {TasksList}
      </ul>
       )}

    </div>
  )
}
export default TaskList;
// This component is intended to display a list of tasks.