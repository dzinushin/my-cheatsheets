// simple web server
const http = require('http')
const PORT = 8080

const server = http.createServer((req, res) => {
  console.log(new Date(),"request from ",req.url)
  console.log(new Date(), "request headers:",req.headers)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello!');
}).listen(PORT);

console.log("Started listen on port: ",PORT)