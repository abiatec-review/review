import styles from "./index.module.scss";

interface IProps {
  onClick?: () => void;
  children?: string
}

const Button: React.FC<IProps>= ({onClick, children}) => (
  <button className={styles.button} onClick={onClick} >{children}</button>
);

export default Button;
