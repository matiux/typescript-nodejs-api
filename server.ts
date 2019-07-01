import express = require('express');

import messages = require('./src/messages');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send(messages.hello);
});

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});