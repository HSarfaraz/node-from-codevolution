const hydPerson = {
  name: "Sarfaraz",
};

let perbPerson = hydPerson;

perbPerson.name = "Wajahat";

console.log(hydPerson.name);

// in order to break the reference

perbPerson = {
  name: "mateen",
};

console.log(hydPerson.name);
console.log(perbPerson.name);
