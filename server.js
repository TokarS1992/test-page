const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const routes = require('./api');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', routes);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 3000;

app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function() {
    console.log(`API running on localhost:${port}`)
});