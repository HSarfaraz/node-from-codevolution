const superHero = require("./super-hero");

console.log(superHero.getName());
superHero.setName("Sarfaraz");
console.log(superHero.getName());

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName());
newSuperHero.setName("Mateen");
console.log(newSuperHero.getName());
