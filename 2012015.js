// console.log('Hello, world!');

var http = require("http");

// var server = http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html', 'Test-Header': 'This is our custom header'});
// 	// res.end('Hello Node HTTP Server!\n');
// 	res.write("<!DOCTYPE html>");
// 	for (var i = 0; i < 10; i++) {
// 		res.write("<span>This is a span " + i + "</span><hr>");
// 	}
// 	res.end();
// });

// server.listen(3000);

// console.log("Server is listening.");

// var server = http.createServer(function(req, res) {
// 	var url = req.url;
// 	url = url.substr(1);
// 	url = url.charAt(0).toUpperCase() + url.slice(1);
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write("<!DOCTYPE html><span>Hey, " + url + "!</span>");
// 	res.end();
// });

// server.listen(3000);

// console.log("Server is listening.");

var $counter = 0;

var server = http.createServer(function(req, res) {
	if (req.url == '/getCounter') {
		res.writeHead(200, {'Content-Type': 'text/json'});
		res.write("{'Count': " + ($counter/2) + "}");
		res.end();
	}
	else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("<!DOCTYPE html><h1>" + ($counter/2) + "</h1>");
		res.end();
		$counter += 1;
	}
});

server.listen(3000);

console.log("Server is listening.");