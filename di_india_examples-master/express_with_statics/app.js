/**
 * Created by tomerweller on 1/12/15.
 */

var express = require('express');
var path = require('path');
var app = express();

app.use("/", express.static(path.join(__dirname, 'static')));

app.get("/", function (req, res) {
    res.send('Hello Express!')
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});