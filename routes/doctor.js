var express = require('express');
var mysql = require('mysql');
var router = express.Router();


router.get('/getDoctors', function(req, res, next) {

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ideofuzion123!",
  database:"medicalmanagementsystem"
});

con.connect(function(err) {
  if (err) res.send(err);
  //res.send("Connected!");
  var sql = "Select * from Doctor";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    res.send(result);
  });
});
});



router.post('/addDoctor', function(req, res, next) {

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ideofuzion123!",
    database:"medicalmanagementsystem"
  });
  
  con.connect(function(err) {
    if (err) res.send(err);
    //res.send("Connected!");
    var name = req.body.name;
    var phoneNumber = req.body.phoneNumber;
    var age = req.body.age;
    var cnic = req.body.cnic;
    var email = req.body.email;
    var address = req.body.address;
    var gender = req.body.gender;
    
    var sql = `INSERT INTO Doctor (Name,PhoneNumber,Age,CNIC,Email,Address,Gender)VALUES ('${name}','${phoneNumber}', ${age}, '${cnic}','${email}','${address}','${gender}');`;
    con.query(sql, function (err, result) {
      if (err) res.send(err);
      res.send(result);
    });
  });
  });

module.exports = router;
