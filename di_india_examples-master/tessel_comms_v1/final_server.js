var http = require('http');
var tessel = require('tessel');
var wifi = require('wifi-cc3000');
var relaylib = require('relay-mono'); 
var relay = relaylib.use(tessel.port['A']);

// var $address = 'http://127.0.0.1';

relay.turnOff(1, console.log(err));

var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);
var led3 = tessel.led[2].output(0);
var gpio = tessel.port['GPIO']; // select the GPIO port
var myPin = gpio.digital[0].output(0); // on GPIO, can be gpio.digital[0] through 5 or gpio.pin['G3'] through ‘G6’

function startServer() {

	var server = http.createServer(function(req, res) {
		console.log(req.headers);
		relay.turnOn(1, console.log(err));
		led2.toggle();
		myPin.toggle();
		setTimeout(function() {
			relay.turnOff(1, console.log(err));
			myPin.toggle();
			led2.toggle();
		}, 10000);

		res.writeHead(200, {'Connection': 'close'});
		res.end('Light it up!');
	});
	server.listen(80);

	console.log("This Tessel's HTTP server is running!");
};

setTimeout(startServer, 15000);