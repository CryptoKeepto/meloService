var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sittikiat',
    password: '7856ek31',
    database: 'melo_db'
});


connection.connect(function(error) {
    if (error) throw error;
    console.log("database connect...");
});


module.exports = connection;