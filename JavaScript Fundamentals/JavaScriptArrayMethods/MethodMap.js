const arr = [
  {
    id: 1,
    name: "John",
    age: 25,
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane",
    age: 30,
    occupation: "Doctor",
  },
  {
    id: 3,
    name: "Bob",
    age: 35,
    occupation: "Lawyer",
  },
];

const result = arr.map((item) => {
//   return item.name + item.age; //[ 'John25', 'Jane30', 'Bob35' ]
    return {
        ...item, country:"India"
    }
});
console.log(result);
