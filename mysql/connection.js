require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.mySQLPW
});

//create database
con.connect(function(err){
  if (err) throw err;
  console.log('Connected!');
  con.query('CREATE DATABASE aquarium', function (err, result){
    if (err) throw err;
    console.log('Database Created');
  })
});
