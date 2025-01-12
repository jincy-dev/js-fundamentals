let user = { name: "John" };
console.log(user.name);
Object.assign(user, { name: "Smith" });
console.log(user.name);

//Object cloning

let clone = Object.assign({}, user);
console.log("cloned name: ", clone.name);
