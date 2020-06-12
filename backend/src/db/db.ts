import mysql from 'mysql';

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'Fabi@no123d',
  database: 'crud',
});

connection.connect((err) => {
  if (err) throw err;
});

export default connection;
