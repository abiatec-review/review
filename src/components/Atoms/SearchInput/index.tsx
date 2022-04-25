import classNames from 'classnames';
import styles from './index.module.scss'
interface IProps {
  value: string;
  onSearchChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  userMail?: string;
}

export const SearchInput:React.FC<IProps> = ({value, onSearchChange, onKeyPressHandler, userMail}) => {
  const isDisabled = !userMail;
  return (
    <div className={styles.SearchInput}>
      <input 
        className={classNames(styles.input, {[styles.disabledInput]: isDisabled})}
        value={value} 
        onChange={onSearchChange} 
        onKeyPress={onKeyPressHandler} 
        disabled={isDisabled}
      />
    </div>
  );
};