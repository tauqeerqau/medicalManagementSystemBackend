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

router.get('/getDoctor', function(req, res, next) {
    var id = req.query.id;
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Ideofuzion123!",
      database:"medicalmanagementsystem"
    });
    
    con.connect(function(err) {
      if (err) res.send(err);
      //res.send("Connected!");
      var sql = `Select * from Doctor where ID=${id}`;
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        res.send(result);
      });
    });
    });

router.get('/deleteDoctor', function(req, res, next) {
        var id = req.query.id;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "Ideofuzion123!",
          database:"medicalmanagementsystem"
        });
        
        con.connect(function(err) {
          if (err) res.send(err);
          //res.send("Connected!");
          var sql = `Delete from Doctor where ID=${id}`;
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


  router.post('/updateDoctor', function(req, res, next) {

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Ideofuzion123!",
      database:"medicalmanagementsystem"
    });
    
    con.connect(function(err) {
      if (err) res.send(err);
      var id = req.body.id;
      var name = req.body.name;
      var phoneNumber = req.body.phoneNumber;
      var age = req.body.age;
      var cnic = req.body.cnic;
      var email = req.body.email;
      var address = req.body.address;
      var gender = req.body.gender;
      
      var sql = `Update Doctor set Name='${name}',
      PhoneNumber='${phoneNumber}',
      Age=${age},
      CNIC='${cnic}',
      Email='${email}',
      Address='${address}',
      Gender='${gender}'
      where ID = ${id}`;
      
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        res.send(result);
      });
    });
    });

module.exports = router;
