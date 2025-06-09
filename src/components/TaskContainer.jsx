// composant utiliser pour afficher les tâches
import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TaskInput from "./taskInput/TaskInput";
import TaskList from "./taskList/TaskList";

const TaskContainer = () => {


    // etat de la liste des taches 
    const [tasksList, setTaskTitle] = useState([]);
    useEffect(() => {
        const storedTask = localStorage.getItem("tasksList");
        if (storedTask) {
            setTaskTitle(JSON.parse(storedTask)) //si une liste existe deja alors on passe cette liste au 
            // local storage en la convertissant tout d'abord en objet vu  que si elle existe dans le localstorage elle sera en chaine de caractere
        }

    }, []);
    const saveTaskToLocalStrorage = (task) => {
        localStorage.setItem("tasksList", JSON.stringify(task));
        // ici la fonction prend l'identifiant de l'element de la tache dans le local storage pour la passer la tache qui 
        // est en paramettree de la fonction pour la modifier grace a la methode setItem de la local storage alors avec cela
        //  on pourra mettre a jour toutes les modifiaction
    }

    const addTask = (title) => {
        const newTask = {
            id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1, // si la liste des taches n'est pas vide, on prend l'id de la derniere tache et on ajoute 1, sinon on commence a 1
            title: title,
            completed: false
        };
        //  mettre a jour la liste a l'aide du spred operateur pour nous permettre ajouter une liste a la liste existante
        const updateList = [...tasksList, newTask];
        setTaskTitle(updateList);
        saveTaskToLocalStrorage(updateList);
        //   ici je recupere les données de la tache que j'ai passé en a saveTaskToLocalStrorage vu qu'il a aussi une methode de setTaskList 
    }
    // fonnction pour editer et supprimer les taches
    const editTask = (id, completedValue) => {
        const updateList=tasksList.map((task) =>
            task.id === id ? { ...task, completed: completedValue } : task // si l'id de la tache correspond a l'id de la tache a editer, on met a jour la tache avec le nouveau statut completed
        )
        setTaskTitle(updateList);
        saveTaskToLocalStrorage(updateList);
    };
    const deleteTask = (id) => {
        const updateList=tasksList.filter((task) => task.id !== id)
        setTaskTitle(updateList) //affiche tous les taches sauf celle qui a l'id correspondant
        saveTaskToLocalStrorage(updateList);
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


    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} />
            <h1>{localStorage.getItem("usernname")}</h1>

            <TaskList
                tasksList={tasksList}
                editTask={editTask}
                deleteTask={deleteTask}
                incompleteTasks={incompleteTasks}
            />
            <Footer completedTasks={completedTasks} />
        </main>
    )
}

export default TaskContainer;