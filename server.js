var express = require('express');
var path = require('path');
var mongojs = require('mongojs');
var bodyParser = require('body-parser')

var db = mongojs('contactlist',['contactlist']);


var app = express();

//static content
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());





app.get('/contacts',function(req, res){
	db.contactlist.find(function(err, result){
		res.json(result);
	});
});

app.post('/contacts',function(req, res){
	db.contactlist.insert(req.body, function(err, result){
		res.json(result);
	});
});

// app.put('/contacts/:id',function(req, res){
//     db.contactlist.findAndModify({
//         query:{_id:mongojs.ObjectId(req.params.id)}, 
//         update:{$set:{name:req.body.name, email:req.body.email, contact:req.body.contact}}.
//         new:true
//     }, function(err, result){
//         res.json(result);
//     });
// });

app.put('/contacts',function(req, res){
    db.contactlist.findAndModify({
        query:{_id:mongojs.ObjectId(req.body._id)}, 
        update:{$set:{name:req.body.name, email:req.body.email, contact:req.body.contact}},
        new:true
    },function(err, result){
        res.json(result);
    });
});


app.delete('/contacts/:id',function(req, res){
    db.contactlist.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, result){
        res.json(result);
    });
});


app.listen(3000, function(){
	console.log("Node Server started on port 3000 ......");
});