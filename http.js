var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    console.log('Method :', req.method);
    console.log('-----------------');
    
    console.log('URL :', req.url);
    console.log('-----------------');
    var parsed = url.parse(req.url, true);
    console.log(parsed.query);
    
    
    //1.header
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.statusCode = 200;

    //2.body
    res.write('<h1>hello</h1>');
    res.write('<h1>world</h1>');

    //3.end
    res.end('end');
}).listen(3000, function () {
    console.log('Server running at localhost:3000');
    
})