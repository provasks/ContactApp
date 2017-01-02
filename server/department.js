var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('university', ['departments']);
require('./common.js');
var CustomError = require('./customError');
require('errors');


router.get('/departments', function(req, res) {
    db.departments.find(function(err, result) {
        res.json(result);
    });
});

router.post('/departments', function(req, res, next) {
    try {
      delete req.body._id;
      db.departments.insert(req.body, function(err, result) {
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

router.put('/departments', function(req, res) {
    db.departments.findAndModify({
        query: {
            _id: mongojs.ObjectId(req.body._id)
        },
        update: {
            $set: {
                code: req.body.code,
                name: req.body.name
            }
        },
        new: true
    }, function(err, result) {
        res.json(result);
    });
});

router.delete('/departments/:id', function(req, res) {
    db.departments.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, result) {
        res.json(result);
    });
});

module.exports = router;
