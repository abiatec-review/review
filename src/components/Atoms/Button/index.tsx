import classNames from "classnames";

import styles from "./index.module.scss";

interface IProps {
  onClick: () => void;
  children: string;
  className?: string;
  isDisabled?: boolean;
}

export const Button: React.FC<IProps>= ({onClick, children, className, isDisabled}) => (
  <button 
    disabled={isDisabled} 
    onClick={onClick} 
    className={classNames(styles.button, className, {[styles.disable]: isDisabled})} 
  >
    {children}
  </button>
);
