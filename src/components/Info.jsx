import styles from './Info.module.css';

export function Info({createdTasks, doneTasks}) {
    return (
        <div className={styles.content}>
            <div className={styles.flex}>
                <span className={styles.createdText}>Tarefas criadas</span>
                <div className={styles.createdCounter}>{createdTasks}</div>
            </div>
            <div className={styles.flex}>
                <span className={styles.doneText}>Concluídas</span>
                <div className={styles.doneCounter}>{doneTasks} de {createdTasks}</div>
            </div>
        </div>
    )
}