var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const Dto = require('./../utils/dto');

router.get('/getPatients', function(req, res, next) {

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ideofuzion123!",
  database:"medicalmanagementsystem"
});

con.connect(function(err) {
  if (err) res.send(err);
  //res.send("Connected!");
  var sql = "Select * from Patient";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    return Dto.sendResponse(res, 200, 'Record Received Successfully',result);
  });
});
});

router.get('/getPatient', function(req, res, next) {
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
      var sql = `Select * from Patient where ID=${id}`;
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        return Dto.sendResponse(res, 200, 'Record Received Successfully',result);
      });
    });
    });

router.get('/deletePatient', function(req, res, next) {
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
          var sql = `Delete from Patient where ID=${id}`;
          con.query(sql, function (err, result) {
            if (err) res.send(err);
            return Dto.sendResponse(res, 200, 'Record Deleted Successfully');
          });
        });
    });


router.post('/addPatient', function(req, res, next) {

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
    var fatherName = req.body.fatherName;
    var phoneNumber = req.body.phoneNumber;
    var age = req.body.age;
    var email = req.body.email;
    var address = req.body.address;
    var gender = req.body.gender;
    
    var sql = `INSERT INTO Patient (Name,fatherName,PhoneNumber,Age,Email,Address,Gender)VALUES ('${name}','${fatherName}','${phoneNumber}', ${age},'${email}','${address}','${gender}');`;
    con.query(sql, function (err, result) {
      if (err) res.send(err);
      return Dto.sendResponse(res, 200, 'Record Added Successfully');
    });
  });
  });


  router.post('/updatePatient', function(req, res, next) {

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
      var fatherName = req.body.fatherName;
      var phoneNumber = req.body.phoneNumber;
      var age = req.body.age;
      var email = req.body.email;
      var address = req.body.address;
      var gender = req.body.gender;
      
      var sql = `Update Patient set Name='${name}',
      fatherName='${fatherName}',
      PhoneNumber='${phoneNumber}',
      Age=${age},
      Email='${email}',
      Address='${address}',
      Gender='${gender}'
      where ID = ${id}`;
      
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        return Dto.sendResponse(res, 200, 'Record Updated Successfully',result);
      });
    });
    });

module.exports = router;
