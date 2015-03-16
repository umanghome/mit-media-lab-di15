var http = require('http');
var request = require('request');

request("http://192.168.43.69", function(error, response, body) {
	console.log(error);
	console.log(response);
	console.log(body);
});