import styles from "./ItemList.module.css"
import { Trash, Check } from '@phosphor-icons/react'
import { TaskType } from "../../Home";


interface TaskProps  {
  task: TaskType;
  isTaskComplete: (id: number) => void;
  removeTask: (id: number) => void;
}

export function ItemList({task, isTaskComplete, removeTask}: TaskProps) {

  function handleTaskStatus() {
    isTaskComplete(task.id);
  }

  function handleRemove() {
    removeTask(task.id);
  }

  const checkboxCheckedClassName =  task.isCompleted ? styles['checkbox-checked'] : styles['checkbox-unchecked'];

  const isTaskCompleted = task.isCompleted ? styles['task-completed'] : styles['task'];

  return (
    <div className={styles.container}>
      <label htmlFor="checkbox" onClick={handleTaskStatus}>
      <input readOnly type="checkbox" checked={task.isCompleted} />
      <span className={`${styles.checkbox} ${checkboxCheckedClassName}`} >
        {task.isCompleted ? <Check/> : ''}
      </span>
      <p className={`${styles.task} ${isTaskCompleted}`}>{task.text}</p>
      </label>
      <button className={styles.deleteButton} onClick={handleRemove}><Trash size={24} /></button>
    </div>
 )
}
