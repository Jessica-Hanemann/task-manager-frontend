import { useEffect } from "react";
const TaskItem = (props) => {
    //ciclo de vida do componente = inserido na dom
    useEffect(() => {
        console.log("component was mounted");

        return () => {
            console.log("i will unmount");
        };
    }, []);

    return (
        <>
            <h1>Tarefas</h1>
            <h2>Usuário: {props.tarefa.usuario}</h2>
            <h3>Descrição: {props.tarefa.description}</h3>
            <h3>id: {props.tarefa.id}</h3>
            <p>
                {props.tarefa.isCompleted
                    ? "Tarefa completa."
                    : "Tarefa não completa."}
            </p>
        </>
    );
};

export default TaskItem;
