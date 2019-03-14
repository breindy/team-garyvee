//spin up my node.js server
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8000;

//node server setup
const server = http.createServer(app);

server.listen(port);