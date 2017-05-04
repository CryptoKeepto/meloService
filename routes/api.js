var express = require('express');
var router = express.Router();
var connection = require('../module/connect');

/* GET  listing. */
router.get('/', function(req, res, next) {
    res.render('api');
});

router.get('/menuFood', function(req, res, next) {
    connection.query('SELECT * FROM menu_food', function(error, result) {
      if (error) {
          console.log('ไม่สามารถดึงข้อมูล menu_food ได้');
          throw error
      }
      res.json(result);
     });
});

router.get('/resFood', function(req, res) {
    connection.query('SELECT * FROM res_food', function(error, result) {
        if (error) {
            console.log('ไม่สามารถดึงข้อมูล res_food ได้');
            throw error;
        }
        res.json(result);
    });
});

router.get('/user', function(req, res) {
    connection.query('SELECT * FROM user', function(error, result) {
        if (error) {
            console.log('ไม่สามารถดึงข้อมูล user ได้');
            throw error;
        }
        res.json(result);
    });
});

router.get('/admin', function(req, res) {
    connection.query('SELECT * FROM admin', function(error, result) {
        if (error) {
            console.log('ไม่สามารถดึงข้อมูล admin ได้');
            throw error;
        }
        res.json(result);
    });
});


module.exports = router;
