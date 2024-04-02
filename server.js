const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);
console.log('app is listening');

app.use(bodyParser.json());

app.get('/get-app', function (req, res) {
    if (req.query.value) {
        console.log(req.query.value);
    }
    res.status(200).send(req.query.value);
});

app.get('/', function (req, res) {
    res.send('hellow its running');
});

app.post('/post-app', function (req, res) {
    if (req.body.message) {
        console.log(req.body.message);
    }
    res.status(200).send(req.body.message);
});