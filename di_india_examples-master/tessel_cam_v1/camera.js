var http = require('http');
var tessel = require('tessel');
var wifi = require('wifi-cc3000');
// var camera = require('camera-vc0706').use(tessel.port['A']);
// var requestify = require('requestify');
var url = require('url');

var $link = url.parse('http://192.168.43.168');


var notificationLED = tessel.led[3]; // Set up an LED to notify when we're taking a picture



setTimeout(function() {
      // Wait for the camera module to say it's ready
    // camera.on('ready', function() {
      notificationLED.high();
      // Take the picture
      // camera.takePicture(function(err, image) {
        // if (err) {
          // console.log('error taking image', err);
        // } else {
          // notificationLED.low();
          // Name the image
          // var name = 'picture-' + Math.floor(Date.now()*1000) + '.jpg';
          // Save the image
          // console.log('Picture saving as', name, '...');
          // process.sendfile(name, image)
          
          console.log('Trying to post an image..');

          // requestify.post($link, {
          //   data: 'hello, world',
          //   headers: {
          //     'content-type': 'image'
          //   }
          // });

          var options = {
            hostname: $link,
            port: 80,
            path: '/',
            method: 'POST',
            data: 'Hello, world!'
          };

          var req = http.request(options, function(res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
              console.log('BODY: ' + chunk);
            });
          });





          console.log('Image posted..');



          // console.log('done.');
          // Turn the camera off to end the script
          // camera.disable();
    //     }
    //   });
    // });

    // camera.on('error', function(err) {
    //   console.error(err);
    // });
  }, 15000);
