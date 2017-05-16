var express = require('express');
var router = express.Router();
var connection = require('../module/connect');

/* GET  listing. */
router.get('/', function(req, res) {
    res.render('api');
});

router.get('/menuFood', function(req, res) {
    connection.query('SELECT * FROM menu_food', function(error, result) {
      if (error) {
          console.log('ไม่สามารถดึงข้อมูล menu_food ได้');
          throw error;
      }
      res.json(result);
     });
});
//ค้นหาตาม id
router.get('/menuFood/:id', function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM menu_food WHERE food_id =' + id, function(error, result) {
      if (error) {
          console.log('ไม่สามารถดึง id menu_food ได้');
          throw error;
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

router.get('/resFood/:id', function(req, res) {
    let id = req.params.id;
    connection.query(`SELECT * FROM res_food WHERE resFood_id =${id}`, function(error, result) {
        if (error) {
            console.log('ไม่สามารถดึง id res_food ได้');
            throw error;
        }
        res.json(result);
    })
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

router.get('/user/:id', function(req, res) {
    let id = req.params.id;
    connection.query(`SELECT * FROM user WHERE user_id=${id}`, function(error, result) {
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

router.get('/admin/:id', function(req, res) {
    let id = req.params.id;
    connection.query(`SELECT * FROM admin WHERE admin_id=${id}`, function(error, result) {
        if (error) {
            console.log('ไม่สามารถดึงข้อมูล admin ได้');
            throw error;
        }
        res.json(result);
    });
});


module.exports = router;
