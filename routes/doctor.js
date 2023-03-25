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
  var sql = "INSERT INTO Persons (LastName, FirstName, Age)VALUES ('Sheeshan', 'Rasha', 21)";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    res.send("1 record inserted");
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
    var sql = "INSERT INTO Doctor (Name,PhoneNumber,Age,CNIC,Email,Address,Gender)VALUES ('Tauqeer ul Hassan','+92-331-5330709', 37, '3740568164377','tauqeerulhassan45@gmail.com','House No 2, Main Street, Ghori Town Phase 2, Islamabad','M');";
    con.query(sql, function (err, result) {
      if (err) res.send(err);
      res.send(result);
    });
  });
  });

module.exports = router;
