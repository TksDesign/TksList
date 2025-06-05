import styles from './Footer.module.css';

const Footer = ({ completedTasks }) => {
    if (completedTasks) {
        return (
            <footer>
                <code className={styles.footer}></code>
                Avec TksList tu as eleminé {completedTasks} tache{completedTasks >1 ? 's':''}
            </footer>
        )
    }
  return <></>;
}

export default Footer;