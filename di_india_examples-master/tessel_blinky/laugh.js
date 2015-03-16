// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This ambient module example console.logs
ambient light and sound levels and whenever a
specified light or sound level trigger is met.
*********************************************/

var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['B']);

ambient.on('ready', function () {
 // Get points of light and sound data.
  setInterval( function () {
      ambient.getSoundLevel( function(err, sdata) {
        if (err) throw err;
    });
  }, 500); // The readings will happen every .5 seconds unless the trigger is hit

  // Set a sound level trigger
  // The trigger is a float between 0 and 1
  ambient.setSoundTrigger(0.08);

  ambient.on('sound-trigger', function(data) {
    console.log("Something happened with sound: ", data);

    // Light up an LED
    tessel.led[1].output(1);

    // Clear it
    ambient.clearSoundTrigger();

    //After 1.5 seconds reset sound trigger
    setTimeout(function () {
        tessel.led[1].output(0);
        ambient.setSoundTrigger(0.08);

    },1500);

  });
});

ambient.on('error', function (err) {
  console.log(err)
});