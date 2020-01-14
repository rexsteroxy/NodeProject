const http = require('http');
const routes = require('./routes/index');

const server = http.createServer(routes.handler);

server.listen('7000');
console.log('server listen to port 9000');