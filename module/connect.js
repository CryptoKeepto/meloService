var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sittikiat',
    password: '7856Ek31',
    database: 'meloDB'
});


connection.connect(function(error) {
    if (error) console.log('Not Connect');
});


module.exports = connection;