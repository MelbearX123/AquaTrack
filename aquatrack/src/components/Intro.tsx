import styles from '../styles/Intro.module.css';

function Intro(){
  //this is going to be the big block that introduced people to the website
  return(
  <div className = {styles.introContainer}>
    <div className = {styles.welcome}>
      <h1>Welcome to AquaTrack</h1>
      <p>Making tracking parameters easier than ever</p>
    </div>
  </div>);
}

export default Intro;