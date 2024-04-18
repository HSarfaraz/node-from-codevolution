const fs = require("node:fs");

console.log("first");
// Reading into a file async
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

console.log("second");

// Reading into a file sync
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("third");
