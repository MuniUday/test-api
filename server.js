const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);
console.log('app is listening');

app.get('/get-app', function (req, res) {
    if (req.query.value) {
        console.log(req.query.value);
    }
    res.status(200).send(req.query.value);
});

app.get('/', function (req, res) {
    res.send('hellow its running');
})