const express = require('express');
const app = express();
const Dotenv = require('dotenv');
Dotenv.config({ silent: true });
var http = require('http');
const connectDB = require('./db/config');

const port = process.env.PORT;

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

server.listen(port, () => {
    console.log("Server connected on port =", port);
});

connectDB();