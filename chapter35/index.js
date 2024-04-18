const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  //req.method GET POST, PUT DELETE
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Sarfaraz",
        lastName: "Hussain",
      })
    );
  } else {
    res.writeHead(404);
  }
});

server.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
