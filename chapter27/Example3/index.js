const fs = require("node:fs");

fs.writeFileSync("./greet.txt", "Hello world");

fs.writeFile("./greet.txt", " Hello Sarfaraz", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});
