// Require all modules
var http = require('http');
var tessel = require('tessel');
var wifi = require('wifi-cc3000');
var ambientlib = require('ambient-attx4');
var url = require('url');
var PulseSensor = require('pulsesensor');
var gpio = tessel.port['GPIO'];
var pulse = PulseSensor.use(tessel.port['GPIO'].pin['A1']);
var ambient = ambientlib.use(tessel.port['B']);

// Declare and start the LEDs
var led1 = tessel.led[0].output(0);
var led2 = tessel.led[1].output(1);
var led3 = tessel.led[2].output(0);

// Declare the global variables
var $serverURL = 'http://192.168.43.219'; // The url of the server
var $timeoutInterval = 3000; // The base timeout interval throughout the code
var $BPMThreshold = 105; // The BPM threshold
var $BPMCounter = 0; // Number of consecutive beats above the BPM threshold
var $BPMCounterThreshold = 5; // Threshold for the number of beats above the BPM threshold
var $isBPMOkay = false; // Is the BPM above it's threshold? Should the events be triggered?
var $soundTriggerThreshold = 0.2;

// Start listening for events
// Start when ambient is on
// ambient.on('ready', function () {

	// Start when pulse monitor is on
	pulse.on('ready', function () {

		pulse.on('beat', function() {
		// setInterval(function() {


			// Get the BPM
	    	var bpm = parseInt(pulse.BPM);
		    console.log(bpm + " + " + $BPMCounter);
		    // Start BPM threshold counter
		    if ((bpm >= $BPMThreshold) && ($BPMCounter <= $BPMCounterThreshold)) {
		    	$BPMCounter++;
		    }
		    else {
		    	$BPMCounter = 0;
		    	$isBPMOkay = false;
		    }
		    if ($BPMCounter == $BPMCounterThreshold) {
		    	console.log($BPMCounterThreshold + " consecutive beats above " + $BPMThreshold + " were recorded.");
		    	$BPMCounter = 0;
		    	$isBPMOkay = true;
		    }

		 //    ambient.getSoundLevel( function(err, sdata) {
			// 	if (err) throw err;
			// 	console.log("Sound Level:", sdata.toFixed(8));
			// });

		 //    ambient.setSoundTrigger($soundTriggerThreshold);

	    	// ambient.on('sound-trigger', function(data) {


		   		if ($isBPMOkay) {

		    		// console.log("The sound triggered.");
		    		var link = url.parse($serverURL);
		    		http.get(link).on('error', function(e) {
			 			console.log("Got error: " + e.message);
					});
		    		console.log("A GET request was sent to the server.");
			    		
					led1.toggle();
					console.log("Sent a request..");

					$isBPMOkay = false;

				}

				// Clear it
				// ambient.clearSoundTrigger();

				//After 1.5 seconds reset sound trigger
				// setInterval(function() {
				// 	ambient.setSoundTrigger($soundTriggerThreshold);
				// }, 1000);
				

	    		// });


		    

		    

		    
    	});
	});

// });





		// });



		// setInterval( function () {
  
  // 			// Get the audio
	 //    	ambient.getSoundLevel( function(err, sdata) {
	 //      		if (err) throw err;
	 //      		console.log("Sound Level:", sdata.toFixed(8));
	 //    	});


  //   	}, $timeoutInterval);





// Trigger the server when an event is triggered