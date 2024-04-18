const SuperHero = require("../example2/super-hero");

const batman = new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Sarfaraz");
console.log(batman.getName());

const superman = new SuperHero("Superman");
console.log(superman.getName());
superman.setName("Mateen");
console.log(superman.getName());
