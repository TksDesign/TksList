import styles from './Footer.module.css';

const Footer = ({ completedTasks }) => {
    if (completedTasks) {
        return (
            <footer>
                <code className={styles.footer}></code>
                Avec taskList tu as elemine {completedTasks} tache{completedTasks >1 ? 's':''}
            </footer>
        )
    }
  return <></>;
}

export default Footer;