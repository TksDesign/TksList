import styles from './TaskItem.module.css';

const Taskitem = () => {
    return (
        <li className={`${styles.container} ${styles.default}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    (id)
                </div>
                <div className={styles.contentDefault}>
                    Ranger mon bureau et finir d'apprendre react !
                </div>
            </div>
            <button className="button-primary">
                x
            </button>
        </li>
    )
}

export default Taskitem