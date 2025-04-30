import "./CustomButtom.scss";

const CustomButtom = ({ onClick, children }) => {
    <div className="custom-buttom-container" onClick={onClick}>
        {children}
    </div>;
};
export default CustomButtom;
