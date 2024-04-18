const fs = require("node:fs");

fs.writeFileSync("./greet.txt", "Hello world");

fs.writeFile("./greet.txt", "Hello Wajahat", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});
