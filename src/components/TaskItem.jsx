import "./TaskItem.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";

const TaskItem = (props) => {
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(
                `http://localhost:8000/tasks/${props.tarefa._id}`
            );
            await props.fetchTasks();
            return toast.success("Tarefa deletada");
        } catch (_error) {
            return toast.error("Algo deu errado no delete!");
        }
    };

    const handleTaskCompletionChange = async (e) => {
        try {
            await axios.patch(
                `http://localhost:8000/tasks/${props.tarefa._id}`,
                {
                    isCompleted: e.target.checked,
                }
            );
            await props.fetchTasks();
            return toast.success("Tarefa modificada com sucesso");
        } catch (_error) {
            return toast.error("Algo deu errado na modificação!");
        }
    };
    return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label
                        className={
                            props.tarefa.isCompleted
                                ? "checkbox-container-completed"
                                : "checkbox-container"
                        }
                    >
                        {props.tarefa.description}
                        <input
                            type="checkbox"
                            defaultChecked={props.tarefa.isCompleted}
                            onChange={(e) => handleTaskCompletionChange(e)}
                        />
                        <span
                            className={
                                props.tarefa.isCompleted
                                    ? "checkmark completed"
                                    : "checkmark"
                            }
                        ></span>
                    </label>
                </div>
                <div className="delete">
                    <AiFillDelete
                        size={18}
                        color="#f97474"
                        onClick={handleTaskDeletion}
                    />
                </div>
            </div>
        </>
    );
};

export default TaskItem;
