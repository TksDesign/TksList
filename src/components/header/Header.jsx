import styles from './Header.module.css';
import reactLogo from '../../assets/logo.svg';

const Header = () => {
    
    return(
        <div className={styles.container}>
         <div className={styles.titleContainer}>
           <img src={reactLogo} alt='logo' width={50} height={50} style={{color:"white", backgroundColor:"white"}}/>
           <div>
            <h1>TksList</h1>
            <div className='color-gray'>
                <code>Eleminer le chaos, suivez le flux</code>
            </div>
           </div>
         </div>
         <div className='color-primary'>v.1.0.0 </div>
        </div>
    )
}

export default Header;