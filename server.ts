import express = require('express');

import messages = require('./src/messages');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send(messages.hello);
});

app.listen(8089, function () {
    console.log('Example app listening on port 8089!');
});