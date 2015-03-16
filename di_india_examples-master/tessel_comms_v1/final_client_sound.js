var http = require('http');
var tessel = require('tessel');
var wifi = require('wifi-cc3000');
var ambientlib = require('ambient-attx4');
var ambient = ambientlib.use(tessel.port['B']);
var url = require('url');
var led = tessel.led[1].output(0);

ambient.on('ready', function () {
  
  setInterval( function () {
  
    ambient.getSoundLevel( function(err, sdata) {
      if (err) throw err;
      console.log("Sound Level:", sdata.toFixed(8));
    });

  }, 500); // The readings will happen every .5 seconds unless the trigger is hit

  // Set a sound level trigger
  // The trigger is a float between 0 and 1
  ambient.setSoundTrigger(0.25);

  ambient.on('sound-trigger', function(data) {
    
    console.log("Something happened with sound: ", data);

    console.log("A request was receieved.");

	// console.log(req.headers);

	// http.get(url.parse('http://192.168.43.69'));
	led.toggle();

	setTimeout(function(){
		led.toggle();
	}, 10000);

	var	link = url.parse('http://192.168.43.219');

	http.get(link, function(res) {
	  console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});

	// setTimeout(function() {
		// res.writeHead(200, {'Connection': 'close'});
		// res.end();
	// });

    // Clear it
    ambient.clearSoundTrigger();

    //After 1.5 seconds reset sound trigger
    setTimeout(function () {

        ambient.setSoundTrigger(0.25);

    }, 500);

  });
});

ambient.on('error', function (err) {
  console.log(err)
});