const arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

let sum = 0;
const value = arr.forEach((item, index) => {
  sum = sum + item.age;
  console.log(index); // 0,1,2
});
console.log(sum); //sum of age
