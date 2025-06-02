// composant utiliser pour afficher les tâches

import Footer from "./footer/Footer";
import Header from "./header/Header";
import TaskInput from "./taskInput/TaskInput";
import TaskList from "./taskList/TaskList";

const TaskContainer = () => {
    return(
        <main>
           <Header />
           <TaskInput />
           <TaskList/>
           <Footer/>
        </main>
    )
}

export default TaskContainer;