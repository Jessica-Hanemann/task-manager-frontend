import { useState } from "react";
// import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import CustomButtom from "./CustomButton";
import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
    const [taskDescription, setTaskDescription] = useState("");

    // const alert = useAlert();

    const onChange = (e) => {
        setTaskDescription(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (taskDescription.length === 0) {
                return toast.error(
                    "A tarefa precisa de uma descrição para ser adicionada!"
                );
            }
            await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, {
                description: taskDescription,
                isCompleted: false,
            });
            await fetchTasks();
            setTaskDescription("");

            return toast.success("A tarefa foi adicionada com sucesso!");
        } catch (_error) {
            return toast.error("Algo deu errado!");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={taskDescription}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButtom onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButtom>
        </div>
    );
};

export default AddTask;
