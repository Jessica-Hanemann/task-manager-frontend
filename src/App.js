import "./App.css";
import { useEffect, useState, useRef } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
    const mounted = useRef(false);

    //ciclo de vida do componente = componente atualizado
    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
        } else {
            console.log("component was updated");
        }
    });

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

    const handleCleanTasks = () => {
        setTasks([]);
    };

    return (
        <>
            {tasks.map((task) => (
                //necessita identificador unico = o id
                <TaskItem key={task.id} tarefa={task} />
            ))}
            <button onClick={handleCleanTasks}>Limpar tarefas</button>
        </>
    );
};

export default App;
