import styles from './Header.module.css';
import rocket from '../assets/rocket.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.alignItems}>
                <img src={rocket} alt="Logotipo foguete" />
                <div>
                    <span className={styles.to}>to</span><span className={styles.do}>do</span>
                </div>
            </div>
        </header>
    )
}