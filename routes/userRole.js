var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const Dto = require('./../utils/dto');

router.get('/getUserRoles', function(req, res, next) {

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ideofuzion123!",
  database:"medicalmanagementsystem"
});

con.connect(function(err) {
  if (err) res.send(err);
  //res.send("Connected!");
  var sql = "Select * from UserRole";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    return Dto.sendResponse(res, 200, 'Record Received Successfully',result);
  });
});
});

router.get('/getUserRole', function(req, res, next) {
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
      var sql = `Select * from UserRole where ID=${id}`;
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        return Dto.sendResponse(res, 200, 'Record Received Successfully',result);
      });
    });
    });

router.get('/deleteUserRole', function(req, res, next) {
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
          var sql = `Delete from UserRole where ID=${id}`;
          con.query(sql, function (err, result) {
            if (err) res.send(err);
            return Dto.sendResponse(res, 200, 'Record Deleted Successfully');
          });
        });
    });


router.post('/addUserRole', function(req, res, next) {

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
    
    var sql = `INSERT INTO UserRole (Name) VALUES ('${name}');`;
    con.query(sql, function (err, result) {
      if (err) res.send(err);
      return Dto.sendResponse(res, 200, 'Record Added Successfully');
    });
  });
  });


  router.post('/updateUserRole', function(req, res, next) {

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
      
      var sql = `Update UserRole set Name='${name}'
      where ID = ${id}`;
      
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        return Dto.sendResponse(res, 200, 'Record Updated Successfully',result);
      });
    });
    });

module.exports = router;
