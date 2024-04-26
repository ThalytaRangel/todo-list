import styles from "./ItemList.module.css"
import { Trash, Check } from '@phosphor-icons/react'

interface ItemListProps  {
  isCompleted: boolean;
}

export function ItemList({isCompleted}: ItemListProps) {

  const checkboxCheckedClassName =  isCompleted ? styles['checkbox-checked'] : styles['checkbox-unchecked'];

  const isTaskCompleted = isCompleted ? styles['task-completed'] : styles['task'];

  return (
    <div className={styles.container}>
      <label htmlFor="checkbox">
      <input readOnly type="checkbox"/>
      <span className={`${styles.checkbox} ${checkboxCheckedClassName}`} >
        {isCompleted ? <Check/> : ''}
      </span>
      <p className={`${styles.task} ${isTaskCompleted}`}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      </label>
      <button className={styles.deleteButton}><Trash size={24} /></button>
    </div>
 )
}
