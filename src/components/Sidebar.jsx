import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import logo from "../assets/images/logo-taskmanager.png";
import "./Sidebar.scss";

const Sidebar = () => {
    const navigate = useNavigate();
    const handleSignOutClick = () => {
        navigate("/login");
    };
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="FSC" />
            </div>
            <div className="sign-out">
                <CustomButton onClick={handleSignOutClick}>Sair</CustomButton>
            </div>
        </div>
    );
};
export default Sidebar;
