var obj = require('./obj.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());


app.listen(3000, function(){
  console.log("Listening!");


});

app.get('/:name', function(req, res){
 console.log(req.params);
 if (obj[req.params.name]){
   res.json(obj[req.params.name])
 }


})
