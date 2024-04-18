const math = require("./math");
console.log(math.add(10, 20));
console.log(math.substract(100, 50));

// or

const math1 = require("./math");
const { add, substract } = math1;
console.log(add(10, 20));
console.log(substract(100, 50));
