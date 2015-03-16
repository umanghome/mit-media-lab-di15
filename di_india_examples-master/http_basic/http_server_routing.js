var http = require("http");

var server = http.createServer(function(request, response) {
    console.log("Got url: " + request.url);
    var text;
    if (request.url=="/a") {
        text = "hello a\n";
    } else if (request.url=="/b") {
        text = "hello b\n";
    } else {
        text = "something else\n";
    }
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(text);
});

server.listen(3000);
console.log("Server is listening");