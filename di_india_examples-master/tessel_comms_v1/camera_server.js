var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();


app.get('/', function(req, res) {
	console.log('A GET request was received.');
	res.status(200);
	res.send();
});

app.post('/', function(req, res) {
	console.log('A POST request was received.');
	res.status(200, {'custom-header': 'test-data'});
	console.log(req);
	res.send();
});

app.listen(80);
console.log('Server is running on port 80.');





// var server = http.createServer(function(req, res) {
// 	// console.log('Pinged the server!');
// 	console.log(req.method);
// 	res.end();
// });

// server.listen(80);
// console.log("Server is listening..");

// server.post('/', function(req, res, next) {
// 	console.log('Got a POST request!');
// 	fs.writeFile('testimage.jpg', req.body, {
// 		encoding: 'utf8',
// 		mode: 438,
// 		flag: 'w'
// 	}, console.log('File is written..'));
// 	res.createHead(200);
// 	res.end();
// });