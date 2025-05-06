const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
require('dotenv').config();
const mysql = require('mysql2');

//create the main menu
const createWindow = () =>{
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
};

//when the popup is opened
ipcMain.on('open-popup', () => {
  const popup = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  popup.loadFile('popup.html');
});

//when the popup is closed
ipcMain.on('close-popup', (event) =>{
  const window = BrowserWindow.fromWebContents(event.sender);
  window.close();
})


// connect to DB
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.mySQLPW,
  database: "aquarium"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


//create the function that handles the parameter sending
function handleSendParameters(event, parameters){
  console.log('Received data from renderer:', parameters);
  //insert values into db
  const sql = `
    INSERT INTO parameters
    (date, Nitrite, Nitrate, Chlorine, Total_Hardness, Total_Alkalinity, Carbonate, pH)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    parameters.date,
    parameters.nitrite,
    parameters.nitrate,
    parameters.chlorine,
    parameters.totalHardness,
    parameters.alkalinity,
    parameters.carbonate,
    parameters.pH
  ];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error('Insert failed:', err);
      return;
    }
    console.log('1 record inserted!');
  });

}

//create the window when the app is ready
app.whenReady().then(() => {
  ipcMain.on('send-parameters', handleSendParameters);

  createWindow();

  //for macos, open a window if none are open
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

//if the user is windows/linux, close the app when clicked
app.on('window-all-closed', () =>{
  if (process.platform !== 'darwin') app.quit();
});
