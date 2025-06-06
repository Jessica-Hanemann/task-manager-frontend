import axios from "axios";
import { useEffect, useState, useMemo, useCallback } from "react";
import { toast } from "react-toastify";
import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    // const fetchTasks = async () => {};

    const fetchTasks = useCallback(async () => {
        try {
            //data é onde estão as tarefas
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}/tasks`
            );
            setTasks(data);
        } catch (_error) {
            return toast.error("Não foi possível recuperar as tarefas!");
        }
    }, []);

    const lastTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    const completedTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === true);
    }, [tasks]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>
            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {lastTasks.map((lastTask) => (
                        <TaskItem
                            key={lastTask._id}
                            tarefa={lastTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasks-list">
                    {completedTasks.map((completedTask) => (
                        <TaskItem
                            key={completedTask._id}
                            tarefa={completedTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
