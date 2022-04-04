import classNames from "classnames";
import styles from "./index.module.scss";

interface IProps {
  onClick?: () => void;
  children?: string;
  className?: string
}

const Button: React.FC<IProps>= ({onClick, children, className}) => (
  <button onClick={onClick} className={classNames(styles.button, className)} >{children}</button>
);

export default Button;
