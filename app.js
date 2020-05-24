var express = require('express');
var app = express();

app.listen(3000, function () {
   console.log('start 3000');
});
/*app.get('/music', function (req, res) {
    res.send('GET 방식 호출');
});

app.post('/music', function (req, res) {
    res.send('POST 방식 호출');
});

app.put('/music', function (req, res) {
    res.send('PUT 방식 호출');
});

app.delete('/music', function (req, res) {
    res.send('DELETE 방식 호출');
})*/

app.route('/music')
    .get(function (req, res) {
    res.send("get 방식2");
    })
    .post(function (req, res) {
        res.send('post 방식2');
    })
    .put(function (req, res) {
        res.send('put 방식2');
    })
    .delete(function (req, res) {
        res.send('delete 방식2');   
    });