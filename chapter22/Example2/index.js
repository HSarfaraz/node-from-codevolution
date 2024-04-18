const PizzaShop = require("./pizza-shop.js");

const pizzaShop = new PizzaShop();

//added
pizzaShop.on("order", (size, topping) => {
  console.log(`order received ${size} with ${topping}`);
});

pizzaShop.order("large", "mashroom");
pizzaShop.displayOrderNumber();
