function ParameterSubmission(){
  return(
    <div className='submissionBox'>
      <div>
        <p>Insert date:</p>
        <input type="date" id='date-input'/>
      </div>

      <div>
        <p>Insert nitrite (NO2) in mg/L:</p>
        <input placeholder="Nitrite" id="nitrite-input"></input>       
      </div>

      <div>
        <p>Insert nitrate (NO3) in mg/L:</p>
        <input placeholder="Nitrate" id="nitrate-input"></input>        
      </div>

      <div>
        <p>Insert chlorine (Cl2) in mg/L:</p>
        <input placeholder="Chlorine" id="chlorine-input"></input>
      </div>

      <div>
        <p>Insert total hardness (GH) in mg/L:</p>
        <input placeholder="Total Hardness" id="total-hardness-input"></input>
      </div>

      <div>
        <p>Insert total alkalinity (TA) in mg/L:</p>
        <input placeholder="Alkalinity" id="alkalinity-input"></input>
      </div>

      <div>
        <p>Insert carbonate (KH) in mg/L:</p>
        <input placeholder="Carbonate" id="carbonate-input"></input>
      </div>

      <div>
        <p>Insert pH:</p>
        <input placeholder="pH" id="pH-input"></input>
      </div>
  </div>
  );
}

export default ParameterSubmission;