const user = {
  name: "abhiram",
  age: 25,
  isWorking: true,
  "birth Place": "tirur",
  address: {
    district: "Malappuram",
    state: "Kerala",
  },
};

for (let item in user) {
  console.log(item);
  console.log(user[item]);
}
// console.log(user.name);
// console.log(user["name"]);

// console.log(user.age);
// console.log(user["age"]);
// console.log(user.isWorking);
// console.log(user["isWorking"]);
// console.log(user["birth Place"]);
let a = {};
let b = {};
console.log(a === b);

let clone = {};
// for (let key in user) {
//   clone[key] = user[key];
// }

// Object.assign(clone, user);
clone = structuredClone(user);
console.log("clone", clone.address == user.address);

user.name = "Abhi";
user.address.state = "Karnataka";

console.log(user.name, clone.name);
console.log(user.address.state, clone.address.state);