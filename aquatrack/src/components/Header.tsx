import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header(){
  return(
    <div className={styles.headerFull}>
      <div className={styles.headerLeft}>
        AquaTrack
      </div>
      <div className={styles.headerRight}>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/tables'>
          <button>Tables</button>
        </Link>
        <Link to='/graphs'>
          <button>Graphs</button>
        </Link>
        {/* <Link to='/'>
        </Link> */}
        <button>About</button>
        <p>|</p>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Header;