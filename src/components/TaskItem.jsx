import "./TaskItem.scss";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
const TaskItem = (props) => {
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
                    <AiFillDelete size={18} color="#f97474" />
                </div>
            </div>
        </>
    );
};

export default TaskItem;
