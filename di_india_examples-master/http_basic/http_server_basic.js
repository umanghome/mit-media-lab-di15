var http = require("http");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node Http Server!\n');
});

server.listen(3000);
console.log("Server is listening");