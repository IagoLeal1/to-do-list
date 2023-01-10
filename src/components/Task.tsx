import styles from './Task.module.css';

export function Task() {
  return(
    <div className={styles.taskBar}>
        <strong className="create">Tarefas criadas</strong>
        <strong className="done">Concluídas</strong>
    </div>
  );
}