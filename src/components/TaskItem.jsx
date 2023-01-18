import styles from './TaskItem.module.css';
import trash from '../assets/trash.svg';
import check from '../assets/check.svg';
import checked from '../assets/checked.svg';
import { useState } from 'react';

export function TaskItem({task, onDoneTasks, onDeleteTask}) {
    const [done, setDone] = useState(task.check);

    function handleSetDone(done, id) {
        setDone(done?false:true);
        onDoneTasks(done?'minus':'plus', id);
    }

    return (
        <div className={styles.taskBox} key={task.id}>
            <img src={done ? checked : check} className={styles.input} onClick={() => handleSetDone(done, task.id)} />
            <span className={done ? styles.textDone : styles.text}>{task.text}</span>
            <img className={styles.trash} src={trash} alt="Botão excluir" onClick={() => onDeleteTask(task.id)} />
        </div>
    )
}