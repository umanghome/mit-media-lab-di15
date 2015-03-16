/**
 * Created by tomerweller on 1/12/15.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello Express Get!\n')
});

app.post('/', function (req, res) {
    res.send('Hello Express Post!\n')
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});