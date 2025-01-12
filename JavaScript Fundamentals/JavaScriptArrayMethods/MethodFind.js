const arr = [
  {
    id: 1,
    name: "John",
    age: 25,
  },
  {
    id: 2,
    name: "Jane",
    age: 30,
  },
  {
    id: 3,
    name: "Bob",
    age: 35,
  },
];

const gAge = 32;
const value = arr.find((item) => {
  return item.age <= gAge;
  //   return item.name === "John";
});
const values = arr.find((item) => {
    return item.name === "Bob";
});

console.log(value);
console.log(values);
