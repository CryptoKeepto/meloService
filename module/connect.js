var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sittikiat',
    password: '7856ek31',
    database: 'meloDB'
    // ไม่ไหวแล้ว
});


connection.connect(function(error) {
    if (error) console.log('Not Connect');
});


module.exports = connection;