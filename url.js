var url = require('url');

var urlPath = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=node.js';

var parsed = url.parse(urlPath, true);
//console.log(parsed);

console.log(parsed.host);
console.log(parsed.path);
console.log("---------------");

console.log(parsed.query);
console.log(parsed.query.query);


