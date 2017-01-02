var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('university', ['subjects']);
require('./common.js');
var CustomError = require('./customError');
require('errors');


router.get('/subjects', function(req, res) {
    db.subjects.find(function(err, result) {
        res.json(result);
    });
});

router.post('/subjects', function(req, res, next) {
    try {
        delete req.body._id;
        db.subjects.insert(req.body, function(err, result) {
            if (err) {
                //var err = new Error('test error message');
                next(err)
            } else
                res.json(result);
        });
    } catch (err) {
        errors.create({
            name: 'FileNotFoundError',
            defaultMessage: 'The requested file could not be found',
            defaultExplanation: 'The file /home/boden/foo could not be found',
            defaultResponse: 'Verify the file exists and retry the operation'
        });
    }
});

router.put('/subjects', function(req, res) {
  debugger;;
  console.log(req.body);
    db.subjects.findAndModify({
        query: {
            _id: mongojs.ObjectId(req.body._id)
        },
        update: {
            $set: {
                code: req.body.code,
                name: req.body.name,
                credit: req.body.credit
              }
        },
        new: true
    }, function(err, result) {
        res.json(result);
    });
});

// router.put('/subjects', function(req, res, next) {
//   console.log(req.body);
//     db.subjects.findAndModify({
//         query: {
//             _id: mongojs.ObjectId(req.body._id)
//         },
//         update: {
//             $set: {
//                 code: req.body.code,
//                 name: req.body.name,
//                 credit: req.body.credit
//             }
//         },
//         new: true
//     }, function(err, result) {
//       next(err);
//         //res.json(result);
//     });
// });

router.delete('/subjects/:id', function(req, res) {
    db.subjects.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, result) {
        res.json(result);
    });
});

module.exports = router;
