const EventEmitter = require("node:events");

const emitter = new EventEmitter();

//res
emitter.on("order-pizza", () => {
  console.log("Order received! Baking a pizza");
});

//req
emitter.emit("order-pizza");
