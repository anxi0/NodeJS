var fs = require('fs');

//new stream?
var debug = fs.createWriteStream('debug.log');
var error = fs.createWriteStream('error.log');

//console class making
var Console = console.Console;

//console obj making
var logger = new Console(debug, error);

logger.log('log message');
logger.info('info message');
logger.warn('warn message');
logger.error('error message');

//Synchronous
try {
    var data = fs.readFileSync('hello.txt', 'utf-8');
    console.log(data);
} catch(exception){
    console.error('sync error :', exception);
}

console.log("sync okay");



//Asynchronous
fs.readFile('hello.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error('async error :', err);
    }
    else {
        console.log(data);
    }
});
console.log('async okay');
