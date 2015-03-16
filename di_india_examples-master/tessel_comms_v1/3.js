var http = require('http');
var tessel = require('tessel');
var wifi = require('wifi-cc3000');
var request = require('request');
var url = require('url');

// setTimeout(function() {
// 	console.log("Trying to send a request..");
// 	http.get('http://192.168.43.69', function(res) {
// 		console.log(res);
// 	});
// }, 5000);

// var options = {
//   hostname: 'http://192.168.43.69',
//   port: 80,
//   path: '',
//   method: 'GET'
// };

// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });

// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });

// // write data to request body
// req.write('data\n');
// req.write('data\n');
// req.end();

var link = url.parse('http://192.168.43.69');

// request("http://192.168.43.69", function(error, response, body) {
//   console.log(error);
//   console.log(response);
//   console.log(body);
// });

http.get(link);