const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: 'root',
  password: 'night25',
  database: 'lista'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

module.exports = db;