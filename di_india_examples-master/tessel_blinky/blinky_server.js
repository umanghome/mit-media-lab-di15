/**
 * Created by tomerweller on 1/12/15.
 */

// Import the interface to Tessel hardware
var tessel = require('tessel');
var http = require("http");
var wifi = require('wifi-cc3000');

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high
// Falsy sets it low.

function startServer() {
    var led1 = tessel.led[0].output(1);
    var led2 = tessel.led[1].output(0);

    var server = http.createServer(function(req, res) {
        console.log("I'm blinking! (Press CTRL + C to stop)");
        // Toggle the led states
        led1.toggle();
        led2.toggle();
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Blink!!\n');
    });

    server.listen(3000);
    console.log("Server is listening");
}

// wifi.on('connect', startServer);
// startServer();

setTimeout(startServer, 10000);