var http = require('http');
var url = require('url');
var request = require('request');
var querystring = require('querystring');

var postData = {
	data: 'hello, world!'
}

setTimeout(function() {
	request.post({
		url: url.parse('http://10.30.68.104'),
		headers: {'Content-Type': 'text/plain'},
		body: "YOYOYO"
	}, function(err, res, body) {
		console.log('Sent a request.');
		// console.log(body);
		console.log(res);
	});
}, 15000);