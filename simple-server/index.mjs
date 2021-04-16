import http from 'http';
import os from 'os';

console.log("Simple server starting...");

const handler = (request, response) => {
  console.log(`Received request from ${request.connection.remoteAddress}`);
  response.writeHead(200);
  response.end(`You've hit ${os.hostname()}\n`);
};

const www = http.createServer(handler);
www.listen(8080);