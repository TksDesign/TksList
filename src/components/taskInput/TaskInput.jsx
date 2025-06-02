import styles from './TaskInput.module.css';

const TaskInput=()=>{
    
    return(
     <div className={`box ${styles.element}`}>
       <h2 className={styles.titles}> ajoute ta prochaine tache</h2>
       <form className={styles.container}>
        <input type='text' className={styles.input} placeholder='indiquer un titre de tache explicite'/>
       <button className="button-primary" type='submit'>Ajouter</button>
       </form>
     </div>
    )
}

export default TaskInput;