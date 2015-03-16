/**
 * Created by tomerweller on 1/12/15.
 */

var express = require('express');
var app = express();

app.get('/add', function (req, res) {
    var a = parseInt(req.param("a"));
    var b = parseInt(req.param("b"));
    var sum = a+b;
    res.send({
        a: a,
        b: b,
        sum : sum
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});