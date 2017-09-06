var express = require('express');
var router = express.Router();
var connection = require('../module/connect');

/* GET  */
router.get('/', function(req, res) {
    res.render('api');
});

// restaurant
router.get('/restaurant/:id', (req, res) => {
    let id = req.params.id;
    let sql = "SELECT * FROM restaurant_category INNER JOIN restaurant ON restaurant_category.id_restaurant_category = restaurant.id_restaurant_category WHERE restaurant.id_restaurant_category =" + id;
    connection.query(sql, function(err, result) {
      if (err) {
          console.log('ไม่สามารถดึงข้อมูล restaurant ได้');
          throw err;
      }
      res.json(result);
     });
});

router.get('/restaurant_category', (req, res) => {
    let sql = "SELECT * FROM restaurant_category";
    connection.query(sql, (err, result) => {
        if (err) {
            console.log("ไม่สามารถดึง restaurant_catrgory ได้");
            throw err;
        }
        res.json(result);
    });
});

router.get('/restaurant_image/:id', (req, res) => {
    let id = req.params.id;
    let sql = "SELECT * FROM restaurant INNER JOIN restaurant_image ON restaurant.id_restaurant = restaurant_image.id_restaurant WHERE restaurant.id_restaurant =" + id;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log("ไม่สามารถดึง restaurant_image ได้");
            throw err;
        }
        res.json(result);
    });
});

// menu
router.get('/menu', (req, res) => {
    let sql = "SELECT * FROM menu";
    connection.query(sql, (err, result) => {
        if (err) {
            console.log("ไม่สามารถดึง menu ได้");
            throw err;
        }
        res.json(result);
    });
});

router.get('/menu/:id', (req, res) => {
    let id = req.params.id;
    let sql = "SELECT * FROM menu INNER JOIN restaurant ON menu.id_menu = restaurant.id_menu WHERE menu.id_menu = " + id;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log("ไม่สามารถดึง menu จาก id ได้");
            throw err;
        }
        res.json(result);
    });
});

// user
router.post('/user_insert', (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    
    let sql = `INSERT INTO user(username_user, password_user, email_user) VALUES ('${username}', '${password}', '${email}')`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log("ไม่สามารถเพิ่ม user ได้");
            throw err;
        } else {
            // result มีค่า
            if (result) {
                res.json({status: "success", message: "Success", subMessage: "Congratulations your accound has been successfully created"});
            } else {
                res.json({status: "error", message: "Error", subMessage: "Ooops.. something wrong, try one more time"});
            }
        }
    });
});


module.exports = router;
