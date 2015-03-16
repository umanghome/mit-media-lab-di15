var http = require('http');
var tessel = require('tessel');
var wifi = require('wifi-cc3000');
var ambientlib = require('ambient-attx4');
var url = require('url');

var ambient = ambientlib.use(tessel.port['B']);

var $address = 'http://127.0.0.1';

var led1 = tessel.led[0].output(0);
var led2 = tessel.led[1].output(1);
var led3 = tessel.led[2].output(0);

function startServer() {

	var server = http.createServer(function(req, res) {
		
		// led2.toggle();
		// setTimeout(function() {
		// 	led2.toggle();
		// }, 600);
		res.writeHead(200);
		res.end('Light it up!');
	});
	server.listen(80);

	console.log("This Tessel's HTTP server is running!");

	};

ambient.on('ready', function () {
  
  // Get points of light and sound data.
  setInterval( function () {
  
    ambient.getSoundLevel( function(err, sdata) {
      if (err) throw err;
      console.log("Sound Level:", sdata.toFixed(8));
    });

  }, 2000); // The readings will happen every .5 seconds unless the trigger is hit

  // Set a sound level trigger
  // The trigger is a float between 0 and 1
  ambient.setSoundTrigger(0.2);

  ambient.on('sound-trigger', function(data) {
    
    console.log("Something happened with sound: ", data);
    var link = url.parse('http://192.168.43.219');
  	// http.get(link);
	http.get(link, function(res) {
	  console.log("CODE: " + res.statusCode);
	  res.on('data', function (chunk) {
	    console.log('BODY: ' + chunk);
	  });
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});



  	led1.toggle();
  	console.log("Sent a request..");

    // Clear it
    ambient.clearSoundTrigger();

    //After 1.5 seconds reset sound trigger
    setTimeout(function () {

        ambient.setSoundTrigger(0.2);

    }, 2000);

  });
});

// setTimeout(startServer, 14000);