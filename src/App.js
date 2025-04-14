import "./App.css";
import { useState } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: "1",
            usuario: "Maria",
            description: "Estudar",
            isCompleted: false,
        },
        {
            id: "2",
            usuario: "Eduarda",
            description: "Ler",
            isCompleted: true,
        },
    ]);

    return (
        <>
            {tasks.map((task) => (
                //necessita identificador unico = o id
                <TaskItem key={task.id} tarefa={task} />
            ))}
        </>
    );
};

export default App;
