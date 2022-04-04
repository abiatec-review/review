import styles from './styles.module.scss'

import { Button, Input } from '../../atoms'

interface IProps {
  classname?: string;
}

export const SearchBox: React.FC<IProps> = ( {classname} ) => {
  return ( 
    <div className={styles.headerSearchBox}>
      <Input />
      <Button buttonName='Submit'/>
    </div>
  )
} 