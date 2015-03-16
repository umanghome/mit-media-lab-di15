/*********************************************
The PulseSensor collects some pulse samples.
When it has enough samples to determine BPM
(beats per minute), it declares ready. It
then logs an updated BPM estimate at each
heartbeat and toggles the blue LED in time.
*********************************************/

var tessel = require('tessel');
var PulseSensor = require('pulsesensor');
var pulse = PulseSensor.use(tessel.port['GPIO'].pin['A1']);

var counter = 0;

pulse.on('ready', function () {
  pulse.on('beat', function (time) {
    var bpm = parseInt(pulse.BPM);
    console.log(bpm + " + " + counter);
    if (bpm >= 105 && counter <= 5) {
    	counter++;
    }
    else {
    	counter = 0;
    }
    if (counter == 5) {
    	console.log("Five consecutive beats above 105 were recorded.");
    	counter = 0;
    }
    // else {
    // 	counter = 0;
    // }

    tessel.led[1].toggle();
  });

});