var path = require('path');
var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    var fname = path.basename(req.url);
    var imageFile = __dirname + path.sep+ fname;    
    
    fs.readFile(imageFile, function (err, data) {
        if (err) {
            res.statusCode = 404;
            res.end("Not found");
            return;
        }
        res.writeHead(200, { 'Content-Type': "image/jpeg" });
        res.end(data);
    });
}).listen(3000, function(){
   console.log('server running');
});