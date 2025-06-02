//import
import ParameterSimpleSubmission from '../components/ParameterSimpleSubmission.tsx';
import ParameterSubmission from '../components/ParameterSubmission.tsx';
import { useState } from 'react';

//define specfic
const [specific, setSpecific] = useState(false);

function AddParameters(){
    <div>
      <div className='titleWrapper'>
        Add Parameters
        <button onClick={() => setSpecific(!specific)}>
          {specific ? 'Specific' : 'Simple'}
        </button>
      </div>
      <div className='inputBox'>
        {specific ? <ParameterSimpleSubmission /> : <ParameterSubmission /> }
        <button className='submitButton'>Submit</button>
      </div>
    </div>
}