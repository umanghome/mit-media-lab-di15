/**
 * Created by tomerweller on 1/12/15.
 */

// Import the interface to Tessel hardware
var tessel = require('tessel');
var http = require('http');
var relaylib = require('relay-mono');
var relay = relaylib.use(tessel.port['A']);  

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high
// Falsy sets it low.


function startServer() {
    console.log("Server starting.");
    var led1 = tessel.led[0].output(1);
    var server = http.createServer(function(req, res) {
        console.log("I'm relaying!");
        // Toggle the led states
        relay.toggle(1, function toggleOneResult(err) {
          if (!err) {
            console.log("Relaying 1!");
          } else {
            console.log("Err toggling 1", err);
          }
        });
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Relay!!\n');
    });
    server.listen(3000);
    console.log("Server is listening");
}


relay.on('ready', function relayReady () {
    console.log("Starting server in 10 seconds.");
    setTimeout(startServer, 10000);
});

relay.on('latch', function(channel, value) {
  console.log('latch on relay channel ' + channel + ' switched to', value);
});

// wifi.on('connect', startServer);
// startServer();
console.log("Wait for it...");
