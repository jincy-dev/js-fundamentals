const arr = [
  {
    id: 1,
    name: "John",
    age: 25,
    occupation: "Software Engineer",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  },
  {
    id: 2,
    name: "Jane",
    age: 30,
    occupation: "Doctor",
    address: {
      street: "456 Elm St",
      city: "Othertown",
      state: "NY",
      zip: "67890",
    },
  },
  {
    id: 3,
    name: "Bob",
    age: 35,
    occupation: "Lawyer",
    address: {
      street: "789 Oak St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  },
];

const result = arr.reduce((total, item) => {
  return total + item.age;
}, 0);
const value = arr.reduce((num, item) => {
  num.push(item.name);
  return num;
}, []);
console.log(result);
console.log(value);