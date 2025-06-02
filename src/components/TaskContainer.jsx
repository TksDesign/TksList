// composant utiliser pour afficher les tâches
import { useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TaskInput from "./taskInput/TaskInput";
import TaskList from "./taskList/TaskList";

const TaskContainer = () => {

    // etat de la liste des taches 

    const [tasksList, setTaskTitle] = useState([
        // {
        //     id: 1,
        //     title: "Ranger mon bureau et finir d'apprendre react !",
        //     completed: false
        // },
        // {
        //     id: 2,
        //     title: "Ranger mon bureau et finir d'apprendre react !",
        //     completed: true
        // }
    ]);
    const addTask=(title)=>{

         const newTask={
            id:tasksList.length+1,
            title:title,
            completed:false
         };
        //  mettre a jour la liste a l'aide du spred operateur pour nous permettre ajouter une liste a la liste existante
         setTaskTitle([...tasksList, newTask]);
    }
    console.log(tasksList);

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