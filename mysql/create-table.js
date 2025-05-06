require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.mySQLPW,
  database: 'aquarium'
});

//create table
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = 'CREATE TABLE parameters (user VARCHAR(16), date DATE, Nitrite VARCHAR(10), Nitrate VARCHAR(10),\
  Chlorine VARCHAR(10), Total_Hardness VARCHAR(10), Total_Alkalinity VARCHAR(10), Carbonate VARCHAR(10),\
  pH VARCHAR(10))';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
