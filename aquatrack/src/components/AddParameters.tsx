//import
import ParameterSimpleSubmission from './ParameterSimpleSubmission.tsx';
import ParameterSubmission from './ParameterSubmission.tsx';
import { useState } from 'react';
import styles from '../styles/AddParameters.module.css';

function AddParameters(){
//Define usestates
const [specific, setSpecific] = useState(false); //toggle between two submission menus
const [showPopup, setShowPopup] = useState(false); //toggle between showing and not showing the modal

  return(
    <div>
      {/* add parameter button that shows modal once clicked */}
      <button onClick={() => setShowPopup(true)} className={styles.addButton}>Add Parameters</button> 
      {/* show the popup if showPopup is true */}
      {showPopup && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className='titleWrapper'>
              <button onClick={() => setShowPopup(false)}>Close</button>
              <button onClick={() => setSpecific(!specific)}>
                {specific ? 'Specific' : 'Simple'}
              </button>
            </div>
            <div className='inputBox'>
                {specific ? <ParameterSubmission /> : <ParameterSimpleSubmission /> }
                <button className='submitButton'>Submit</button>
            </div>
          </div>         
        </div>
      )}
    </div>   
  );
}

export default AddParameters;