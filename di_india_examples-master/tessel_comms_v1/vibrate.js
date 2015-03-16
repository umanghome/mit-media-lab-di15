// var tessel = require('tessel');

// var gpio = tessel.port['GPIO'];

// var G3 = gpio.pin['G3'];


// console.log("Output inititated.");
// G3.output(1);
// setTimeout(function() {
// 	G3.output(0);
// 	console.log("Output terminated.");
// }, 30000);

var tessel = require('tessel'); // import tessel
var gpio = tessel.port['GPIO']; // select the GPIO port
var myPin = gpio.digital[0].output(1); // on GPIO, can be gpio.digital[0] through 5 or gpio.pin['G3'] through ‘G6’

setTimeout(myPin.toggle(), 5000);
setTimeout(myPin.toggle(), 5000);