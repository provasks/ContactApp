//imports
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

//static content
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(require('./server/student'));
app.use(require('./server/subject'));
app.use(require('./server/department'));

app.listen(3000, function() {
    console.log("Node Server started on port 3000 ......");
});
