var http = require('http');
var url = require('url');
var request = require('request');

var $counter = 0;

var server = http.createServer(function(req, res){
	console.log("A request was receieved.");

	console.log(req.headers);

	// http.get(url.parse('http://192.168.43.69'));

	var	link = url.parse('http://192.168.43.43');
	$counter++;
	http.get(link, function(res) {
	  console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});

	// var options = {
	// 	hostname: link,
	// 	port: 80,
	// 	path: '/',
 //  		method: 'GET'
 //  		// headers: {'Connection': 'close'}
	// };

	// request(options,  function(response) {
	// 	console.log("Got response: " + response.statusCode);
	// }).on('error', function(e) {
	// 	console.log("Got error: " + e.message);
	// });



	console.log('Counter: ' + $counter);
	// setTimeout(function() {
		res.writeHead(200, {'Connection': 'close'});
		res.end();
	// });

});

server.listen(80);
console.log("Server started listening.");

// server.on('request', function(req, res) {
// 	if ($counter % 4 == 0) {
// 		// $counter == 0;
// 		server.close(console.log("The server is closed."));
// 		server.listen(80);
// 		console.log("The server is restarted.");
// 	}
// });