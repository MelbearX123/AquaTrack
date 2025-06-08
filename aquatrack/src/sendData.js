//send the data onclick of submit button

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {

  //get all the items
  const date = document.getElementById('date-input').value;
  const nitrite = document.getElementById('nitrite-input').value;
  const nitrate = document.getElementById('nitrate-input').value;
  const chlorine = document.getElementById('chlorine-input').value;
  const totalHardness = document.getElementById('total-hardness-input').value;
  const alkalinity = document.getElementById('alkalinity-input').value;
  const carbonate = document.getElementById('carbonate-input').value;
  const pH = document.getElementById('pH-input').value;


  //send all the parameters
  // window.electronAPI.sendParameters({
  //   date,
  //   nitrite,
  //   nitrate,
  //   chlorine,
  //   totalHardness,
  //   alkalinity,
  //   carbonate,
  //   pH
  // });

})