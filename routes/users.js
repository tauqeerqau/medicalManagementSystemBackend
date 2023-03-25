var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

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


/* GET users listing. */
router.get('/getUsers', function(req, res, next) {

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ideofuzion123!",
    database:"medicalmanagementsystem"
  });
  
  con.connect(function(err) {
    if (err) res.send(err);
    //res.send("Connected!");
    var sql = "Select * From Persons";
    con.query(sql, function (err, result) {
      if (err) res.send(err);
      res.send(result);
    });
  });
  });

module.exports = router;
