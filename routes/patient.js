var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const Dto = require('./../utils/dto');
var crypto = require('crypto');

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
    database:"medicalmanagementsystem",
    multipleStatements: true
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
    var roleId = 2;
    var userName = req.body.userName;
    var passwordData = encryptPassword(req.body.password);
    var password = passwordData.hash;
    var saltKey = passwordData.salt;
    var doctorId = req.body.doctorId;
    var categoryId=req.body.categoryId;
    var sql = `INSERT INTO Person (Name,PhoneNumber,Age,CNIC,Email,Address,Gender,RoleId,UserName,Password,SaltKey)`;
    sql+= `VALUES ('${name}','${phoneNumber}', ${age}, '${cnic}','${email}','${address}','${gender}',${roleId},'${userName}','${password}','${saltKey}');`;
    sql+= `INSERT INTO Patient (PersonId,DoctorId) VALUES(LAST_INSERT_ID(),${doctorId})`;
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
      database:"medicalmanagementsystem",
      multipleStatements: true
    });
    
    con.connect(function(err) {
      if (err) res.send(err);
      var id = req.body.id;
      var name = req.body.name;
      var fatherName = req.body.fatherName;
      var phoneNumber = req.body.phoneNumber;
      var age = req.body.age;
      var cnic = req.body.cnic;
      var email = req.body.email;
      var address = req.body.address;
      var gender = req.body.gender;
      var doctorId = req.body.doctorId;
    var categoryId=req.body.categoryId;
    var PersonId=req.body.PersonId;

    var sql = `Update Person set Name='${name}',
    FatherName='${fatherName}',
    PhoneNumber='${phoneNumber}',
    Age=${age},
    CNIC='${cnic}',
    Email='${email}',
    Address='${address}',
    Gender='${gender}'
    where ID = ${id}`;
    sql+=`Update Patient set PersonID=${id},DoctorId=${doctorId}, CategoryId=${categoryId} where ID=${id}  `;



      con.query(sql, function (err, result) {
        if (err) res.send(err);
        return Dto.sendResponse(res, 200, 'Record Updated Successfully',result);
      });
    });
    });

    function encryptPassword(password) { 
     
      // Creating a unique salt for a particular user 
         var salt = crypto.randomBytes(16).toString('hex'); 
       
         // Hashing user's salt and password with 1000 iterations, 
          
         var hash = crypto.pbkdf2Sync(password, salt,  
         1000, 64, `sha512`).toString(`hex`); 
         var data = {
          hash:hash,
          salt:salt
         };
         return data;
     }; 

     function validatePassword(password, hashedPassword,saltKey) { 
      var hash = crypto.pbkdf2Sync(password,  
      saltKey, 1000, 64, `sha512`).toString(`hex`); 
      return hashedPassword === hash; 
  }; 

module.exports = router;
