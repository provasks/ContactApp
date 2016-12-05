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
	/*
	var customers = [{name:'provas',email:'provasks@gmail.com',contact:'111 111 1111'},{
  	name:'Mousumi',
  	email:'titotumpa@gmail.com',
  	contact:'222 222 2222'
  }];
	res.json(customers);
	*/
});
app.post('/contacts',function(req, res){
	debugger;
	db.contactlist.insert(req.body, function(err, result){
		res.json(result);
	});
});


app.listen(3000, function(){
	console.log("Node Server started on port 3000 ......");
});