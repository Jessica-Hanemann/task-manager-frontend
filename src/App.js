import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
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

    const fetchTasks = async () => {
        try {
            //data é onde estão as tarefas
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

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
