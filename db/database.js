const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "j#[Xw6x]*'=DiQyf9C.WQ0vZ;",
    database: 'business_db'
});

module.exports = connection;