import classNames from "classnames";

import styles from "./index.module.scss";

interface IProps {
  className?: string
}

export const Loader: React.FC<IProps> = ({className}) => {
  return (
    <div className={classNames(styles.loader, className)}>
      <div className={classNames(styles.firstChild)}/>
      <div className={classNames(styles.secondChild)}/>
    </div>
  )
}