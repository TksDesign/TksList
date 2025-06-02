import styles from './TaskInput.module.css';
import { useState } from 'react';

const TaskInput = ({ addTask }) => {
  // placeholder pour l'input
  const [placeholder, setPlaceholder] = useState(true);
  // fonction pour ajouter une nouvelle tâche

  // etat 
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);

  }
  const handleAddTask = (e) => {
    // prevent default pour eviter le rechargement de la page
      e.preventDefault();
    // verifier si l'input est vide
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
      setPlaceholder(true);
    }
      setPlaceholder(false);
  }

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.titles}> ajoute ta prochaine tache</h2>
      <form className={styles.container} onSubmit={handleAddTask}>
        <input type='text'
          className={`${styles.input} ${placeholder ? styles.placeholderDefault:styles.placeholderWanring}`} placeholder={placeholder ? 'Indiquer un titre de tâche explicite' : 'Veuillez entrer un titre de tâche'}
          onChange={handleInputChange}
          // definir la valeur de l'input
          value={taskTitle}
        />
        <button className="button-primary" type='submit'>Ajouter</button>
      </form>
    </div>
  )
}

export default TaskInput;