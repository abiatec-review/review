import "./index.css";

interface IProps {
  onClick?: () => void;
  children?: string
}

const Button: React.FC<IProps>= ({onClick, children}) => (
  <button className="Button" onClick={onClick} >{children}</button>
);

export default Button;
