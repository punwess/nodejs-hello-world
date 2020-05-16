//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world');
});
//listen to port 3000 by default
app.listen(process.env.PORT);
console.log("listen on port:",process.env.PORT)
module.exports = app;1