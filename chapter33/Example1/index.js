const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("<h1>Hello World</h1>");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
