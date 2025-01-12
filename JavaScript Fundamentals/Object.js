let obj = { name: "hello", age: 21, nickName: "world" };
console.log(obj.name);

let key = "nickName";
console.log(obj[key]);

let fruit = "apple";
let bag = {
  apple: 5,
};
console.log(bag.apple);
console.log(bag.orange);
let bags = {
  [fruit + "computer"]: 5,
};
console.log(bags.applecomputer);

function personalDetails(name1, age1, maritalStatus) {
  return {
    name1: name1,
    age1: age1,
    maritalStatus: maritalStatus,
  };
}
let user = personalDetails("Jincy", 23, "Unmarried");

console.log(user.name1);

console.log(user.maritalStatus);

let obj1 = {
  let: "hey",
  for: 21,
};
console.log(obj1.for);

let place = {
  state: "kerala",
  district: "Trivandrum",
};
let key1 = "state";
console.log(key1 in place); //true
console.log(key in place); //false

let userDetails = {
  fName: "Jino",
  sName: "Dev",
  jAge: 20,
};
for (let prop in userDetails) {
  console.log(prop);
  console.log(userDetails[prop]);
}

let codes = {
  "+1": "America",
  "+49": "Germany",
  "+41": "Switzerland",
  "+91": "India",
};
for (let code in codes) {
  console.log(code);
}

let countryCodes = {
  "+1": "America",
  "+49": "Germany",
  "+41": "Switzerland",
  "+91": "India",
};
for (let countryCode in countryCodes) {
  console.log(+countryCode);
}

/*
??
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object
 */
let user1 = {};
user1.names = "John";
user1.surName = "Smith";
user1.names = "Pete";

console.log(user1.names);
delete user1.names;
console.log(user1);

/*
??
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/
function isEmpty(obje) {
  for (let key in obje) return false; // false
  return true;
}
/*
??
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0. */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries;
}
console.log(sum);


function multiplyNumeric(width, height, title) {
  return { width, height, title };
}
let final = multiplyNumeric(200, 300, "My Menu");
console.log("final", final.height);


