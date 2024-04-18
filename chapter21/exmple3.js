const EventEmitter = require("node:events");

const emitter = new EventEmitter();

//res
emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("Serving a complimentary drink");
  }
});

//req
emitter.emit("order-pizza", "large", "mashroom");
