const EventEmitter = require("node:events");

const emitter = new EventEmitter();

//res
emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

//req
emitter.emit("order-pizza", "large", "mashroom");
