var server = require('http');

server.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<!DOCTYPE html');
    res.write('<html>');
    res.write('<head><title>NODEJS</title></head>');
    res.write('<body><h1>Helloworld!</h1></body>');
    res.end();
}).listen(3000, 'localhost');

console.log('server is running at http://localhost:3000');

var fs = require("fs");
fs.readFile("./hello.txt", encoding = 'utf-8', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});

var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("hello node", function (str) {
    console.log(str); 
});

setTimeout(() => {
    evt.emit("hello node", "hello nodejs");
}, 3000);