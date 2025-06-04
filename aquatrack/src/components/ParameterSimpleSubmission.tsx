import styles from '../Submissions.module.css';

function ParameterSimpleSubmission(){
  return(
    <div className='submissionBox'>
      <p>Insert date:</p>
      <input type="date" id='date-input'/>
      <p>Insert nitrite (NO2) in mg/L:</p>
      <div className={styles.groupButtons}>
        <button>0</button>
        <button>1</button>
        <button>5</button>
        <button>10</button>
      </div>
      <p>Insert nitrate (NO3) in mg/L:</p>
      <div className={styles.groupButtons}>
        <button>0</button>
        <button>10</button>
        <button>25</button>
        <button>50</button>
        <button>100</button>
        <button>250</button>
      </div>
      <p>Insert chlorine (Cl2) in mg/L:</p>
      <div className={styles.groupButtons}>
        <button>0</button>
        <button>0.8</button>
        <button>1.5</button>
        <button>3.0</button>
      </div>

      <p>Insert total hardness (GH) in mg/L:</p>
      <div className={styles.groupButtons}>
        <button>0</button>
        <button>25</button>
        <button>75</button>
        <button>150</button>
        <button>300</button>
      </div>

      <p>Insert total alkalinity (TA) in mg/L:</p>
      <div className={styles.groupButtons}>
        <button>0</button>
        <button>40</button>
        <button>80</button>
        <button>120</button>
        <button>180</button>
        <button>300</button>
      </div>
      <p>Insert carbonate (KH) in mg/L:</p>
      <div className={styles.groupButtons}>
        <button>0</button>
        <button>40</button>
        <button>80</button>
        <button>120</button>
        <button>180</button>
        <button>300</button>
      </div>
      <p>Insert pH:</p>
      <div className={styles.groupButtons}>
        <button>6.4</button>
        <button>6.8</button>
        <button>7.2</button>
        <button>7.6</button>
        <button>8.0</button>
        <button>8.4</button>
      </div>
    </div>
  );
}

export default ParameterSimpleSubmission;