var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

app.use(express.static('/'));
app.use(express.static('dist'));
app.use('/*', express.static(path.resolve('dist')));

router.get('/', function(req, res) {
    res.sendFile(path.resolve('src/client/index.html'));
});

/* Test route */
router.get('/test-route', function (req, res) {
    res.send('Requests to server are OK');
});

module.exports = router;