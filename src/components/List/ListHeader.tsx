import styles from './ListHeader.module.css';

interface Props {
  taskCounter: number;
  completedTaskCounter: number;
}

export function ListHeader({taskCounter, completedTaskCounter}: Props){
  return (
    <header className={styles.container}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span>{taskCounter}</span>
      </div>
      <div className={styles.completedTasks}>
        <p>Concluídas</p>
        <span>{`${completedTaskCounter} de ${taskCounter}`}</span>
      </div>
    </header>
  )
}