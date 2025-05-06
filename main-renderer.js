console.log("mainrenderer.js loaded!");

//open the other window
const openPopup = document.getElementById('open-popup');
openPopup.addEventListener('click', () =>{
  window.electronAPI.openPopup();
})