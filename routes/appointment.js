var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const Dto = require('./../utils/dto');

router.get('/getAppointments', function(req, res, next) {

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ideofuzion123!",
  database:"medicalmanagementsystem"
});

con.connect(function(err) {
  if (err) res.send(err);
  //res.send("Connected!");
  var sql = "Select * from Appointments";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    return Dto.sendResponse(res, 200, 'Record Received Successfully',result);
  });
});
});

router.get('/getAppointment', function(req, res, next) {
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
      var sql = `Select * from Appointments where ID=${id}`;
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        return Dto.sendResponse(res, 200, 'Record Received Successfully',result);
      });
    });
    });

router.get('/deleteAppoitment', function(req, res, next) {
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
          var sql = `Delete from Appointments where ID=${id}`;
          con.query(sql, function (err, result) {
            if (err) res.send(err);
            return Dto.sendResponse(res, 200, 'Record Deleted Successfully');
          });
        });
    });


router.post('/addAppointment', function(req, res, next) {

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ideofuzion123!",
    database:"medicalmanagementsystem"
  });
  
  con.connect(function(err) {
    if (err) res.send(err);
    //res.send("Connected!");
    var patientId = req.body.patientId;
    var doctorId = req.body.doctorId;
    var appointmentTime = req.body.appointmentTime;

    
    var sql = `INSERT INTO Appointments (patientId,doctorId,appointmentTime)VALUES (${patientId},'${doctorId}','${appointmentTime}');`;
    con.query(sql, function (err, result) {
      if (err) res.send(err);
      return Dto.sendResponse(res, 200, 'Record Added Successfully');
    });
  });
  });


  router.post('/updateDisease', function(req, res, next) {

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
      var description = req.body.description;
      var subCategoryId = req.body.subCategoryId;
      
      var sql = `Update Disease set Name='${name}',
      Description='${description}',
      SubCategoryId=${subCategoryId}
      where ID = ${id}`;
      console.log(sql);
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        return Dto.sendResponse(res, 200, 'Record Updated Successfully',result);
      });
    });
    });

module.exports = router;
