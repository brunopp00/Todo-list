import styles from './NewTask.module.css';
import plus from '../assets/plus.svg';

export function NewTask({newTask, inputValue, setInputValue}) {
    return (
        <div className={styles.content}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa' 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => newTask()}>
                <span>Criar</span>
                <img src={plus} />
            </button>
        </div>
    )
}