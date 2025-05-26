import styles from '../styles/Header.module.css';

function Header(){
  return(
    <div className={styles.headerFull}>
      <div className={styles.headerLeft}>
        AquaTrack
      </div>
      <div className={styles.headerRight}>
        <button>Home</button>
        <button>Tables</button>
        <button>Graphs</button>
        <button>About</button>
        <p>|</p>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Header;