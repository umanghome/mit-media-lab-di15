var http = require('http');
var tessel = require('tessel');
var wifi = require('wifi-cc3000');
var url = require('url');

var led = tessel.led[1].output(0);

setTimeout(function() {
	console.log("Trying to send a request");
	// request("http://192.168.43.219/", function(error, response, body) {
	// 	console.log(error);
	// 	console.log(response);
	// 	console.log(body);
	// });
	var	link = url.parse('http://192.168.1.105');
	http.get(link, function(res) {
	  console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
	led.toggle();
	// var res = http.get(link);
	// console.log(res);

}, 10000);