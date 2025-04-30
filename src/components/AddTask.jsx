import { useState } from "react";
// import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import CustomButtom from "./CustomButton";
import "./AddTask.scss";

const AddTask = () => {
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
            await axios.post("http://localhost:8000/tasks", {
                description: taskDescription,
                isCompleted: false,
            });
        } catch (error) {}
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={taskDescription}
                onChange={onChange}
            />
            <CustomButtom onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButtom>
        </div>
    );
};

export default AddTask;
