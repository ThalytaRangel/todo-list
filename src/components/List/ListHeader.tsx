import styles from './ListHeader.module.css';

export function ListHeader(){
  return (
    <header className={styles.container}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span>5</span>
      </div>
      <div className={styles.completedTasks}>
        <p>Concluídas</p>
        <span>2 de 5</span>
      </div>
    </header>
  )
}