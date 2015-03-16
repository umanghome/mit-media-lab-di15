// Import the interface to Tessel hardware
var tessel = require('tessel');
var http = require("http");
var wifi = require('wifi-cc3000');

// Initialize Counter
var $counter = 0;

// Import file system
var fs = require('fs');

// Create the server
var server = http.createServer(function(req, res) {

        fs.readFile(__dirname + '/socket_io_test/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

        res.writeHead(200);
        res.end();
        });
});
server.listen(3000);

// Import socket
var socket = require('socket.io')(server);

// Set up the ambient sensor to detect audio
ambient.on('ready', function () {
    // Get sound level
    setInterval( function () {
        ambient.getSoundLevel( function(err, sdata) {
            if (err) throw err;
        });
    }, 500);

    // Set the trigger level
    ambient.setSoundTrigger(0.05);

    // Event on trigger
    ambient.on('sound-trigger', function(data) {
        console.log("Something happened with sound: ", data);

        // Light up an LED
        tessel.led[1].output(1);

        // Increment the counter
        $counter++;
        console.log("The counter is now at: " + $counter);

        // Emit with Socket
        socket.emit('count', {'counter': ($counter / 2)});

        // Clear it
        ambient.clearSoundTrigger();

        //After 1.5 seconds reset sound trigger
        setTimeout(function () {
            tessel.led[1].output(0);
            ambient.setSoundTrigger(0.05);
        },1500);
    });
});


console.log("Server is listening");