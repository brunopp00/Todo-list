import styles from './Empty.module.css';
import clipboard from '../assets/clipboard.svg';

export function Empty() {
    return (
        <div className={styles.content}>
            <img src={clipboard} />
            <div className={styles.textAlign}>
                <span className={styles.title}>Você ainda não tem tarefas cadastradas</span>
                <span className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}