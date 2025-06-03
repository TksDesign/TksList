import TaskItem from '../taskItem/TaskItem';
import styles from './TaskList.module.css'

const TaskList = ({
  tasksList,
  incompleteTasks,
  editTask,
  deleteTask,
}) => {
  // Afficher les de taches 
  const TasksList = tasksList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask} />
  ));
  if(tasksList && tasksList.length >0){
      return (
    <div className='box'>
      <h2 className={styles.title}>
        Il te reste {incompleteTasks} tache a accomplir !
      </h2>
      {tasksList && tasksList.length > 0 && (
        <ul className={styles.container}>
          {TasksList}
        </ul>
      )}

    </div>
  )
  }
  return(
    <div className='box'>
      <h2 className={styles.emptyState}>
        Salut ✋ , tu n'as rien a faire aujourd'hui 🥳! faut profiter de ta journee 😏
      </h2>
    </div>
  )

}
export default TaskList;
// This component is intended to display a list of tasks.