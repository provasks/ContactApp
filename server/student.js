var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('university', ['students']);
require('./common.js');
var CustomError = require('./customError');


router.get('/students', function (req, res) {
    db.students.find(function (err, result) {
        res.json(result);
    });
});

router.post('/students', function (req, res) {
  try{
    req.body.password = getMD5Hash( req.body.password );
    delete req.body._id;
    db.students.insert(req.body, function (err, result) {
      if(err)
        throw err;
      else
        res.json(result);
    });
  }
  catch(err){
    res.json('Duplicate email.');
  }
});

router.put('/students', function (req, res) {
    db.students.findAndModify({
        query: {_id: mongojs.ObjectId(req.body._id)},
        update: {$set: {
          name: req.body.name,
          email: req.body.email,
          password: getMD5Hash( req.body.password ),
          contact: req.body.contact
        }},
        new : true
    }, function (err, result) {
        res.json(result);
    });
});

router.delete('/students/:id', function (req, res) {
    db.students.remove({_id: mongojs.ObjectId(req.params.id)}, function (err, result) {
        res.json(result);
    });
});

module.exports = router;
