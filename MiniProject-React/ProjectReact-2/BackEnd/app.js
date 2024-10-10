var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const mysql = require('mysql2');
var app = express();
var jsonParser = bodyParser.json();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = "Fullstack-login-2021" ;

// กำหนดค่า saltRounds
const saltRounds = 10;

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tii123456789@',
  database: 'mydb'
});

// Enable CORS for all requests
app.use(cors());

// Handle POST requests to /register
app.post('/register', jsonParser, function (req, res) {
  // ทำการแฮชรหัสผ่านด้วย bcrypt
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    if (err) {
      res.json({status: "error", message: err});
      return;
    }

    // หลังจากแฮชรหัสผ่านเสร็จ ทำการบันทึกข้อมูลลงฐานข้อมูล
    connection.execute(
      'INSERT INTO users (fname, lname, email, password) VALUES (?, ?, ?, ?)',
      [req.body.fname, req.body.lname, req.body.email, hash],
      function (err, results, fields) {
        if (err){
          res.json({status: "error", message: err});
          return;
        }
        res.json({status: "ok"});
        
      }
    );
  });
});
app.post('/login', jsonParser, function (req, res) {
  
    connection.execute(
      'SELECT * FROM users WHERE email=?',
      [req.body.email],
      function (err, results, fields) {
        if (err){
          res.json({status: "error", message: err});
          return;
        }
        if (results.length == 0 ){
          res.json({status:'error',message:'no user found'});
          return 
          
        }
        bcrypt.hash(req.body.password, results[0].password, function(err, isLogin) {
          if (isLogin) {
            
            var token = jwt.sign({ email: results[0].email }, secret , { expiresIn: '1h' });
            res.json({status: "ok", message: "login success",token:token});
            
          }else{
            res.json({status: "error", message: err});

          }
        
        
      }
    );
  });
});
app.post('/authen', jsonParser, function (req, res) {

 try {
  const token = req.headers.authorization.split(' ')[1]
  var decoded = jwt.verify(token,secret);
  res.json({status:"ok",decoded:decoded})
 } catch (err) {
  res.json({status:"error",message:err})
 }
});


// Start the server and listen on port 3333
app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333');
});
