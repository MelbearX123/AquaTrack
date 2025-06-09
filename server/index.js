import express from 'express';
import mysql from "mysql2";
const app = express();

const db = mysql.createConnection({
  host: process.env.MySQLhost,
  user: process.env.MySQLuser,
  password: process.env.MySQLpw,
  database: 'aquarium'
})

app.listen(5173, () => {
  console.log('Connected to backend!');
});