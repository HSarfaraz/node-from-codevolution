const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  /* const html = fs.readFileSync("./index.html", "utf-8"); // we wanted to read the file before sending
  res.end(html); */
  //using stream
  fs.createReadStream(__dirname + "./index.html").pipe(res);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
