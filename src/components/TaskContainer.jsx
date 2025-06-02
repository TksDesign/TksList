// composant utiliser pour afficher les tâches
import { useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TaskInput from "./taskInput/TaskInput";
import TaskList from "./taskList/TaskList";

const TaskContainer = () => {

    // etat de la liste des taches 
    const [tasksList, setTaskTitle] = useState([]);
    const addTask = (title) => {

        const newTask = {
            id: tasksList.length + 1,
            title: title,
            completed: false
        };
        //  mettre a jour la liste a l'aide du spred operateur pour nous permettre ajouter une liste a la liste existante
        setTaskTitle([...tasksList, newTask]);
    }
        // fonnction pour editer et supprimer les taches
        const editTask = (id, completedValue) => {
            setTaskTitle(tasksList.map((task) => {
                task.id === id ? { ...task, completed: completedValue } : task; // si l'id de la tache correspond a l'id de la tache a editer, on met a jour la tache avec le nouveau statut completed
            }))
        };
        const deleteTask = (id) => {
            setTaskTitle(tasksList.filter((task) => task.id !== id)) //affiche tous les taches sauf celle qui a l'id correspondant
        };
        // afficher le nombre taches complet et incomplet
        const getTasksCount = () => {
            const completedTasks = tasksList.filter((task) => task.completed).length;
            const incompleteTasks = tasksList.length - completedTasks;
            return { completedTasks, incompleteTasks };
        };
        // recuperer les return de la fonction getTasksCount et creer deux constantes avec les valeurs de completedTasks et incompleteTasks
        // on peut aussi utiliser la destructuration pour recuperer les valeurs de l'objet retourné par la fonction getTasksCount
        const { completedTasks, incompleteTasks } = getTasksCount();
        console.log(completedTasks, incompleteTasks);
        console.log(tasksList)

    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} />
            <TaskList />
            <Footer />
        </main>
    )
}

export default TaskContainer;