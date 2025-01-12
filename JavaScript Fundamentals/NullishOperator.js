let fName = "Jincy";
let lName = "Dev";
let nickName = "Jincyyee";
console.log(fName || lName || nickName);

let frName = null;
let lsName = null;
let nkName = "Jincyyee";
console.log(frName || lsName || nkName || "Me");
let name;
let age;
let address;
console.log(name ?? lName);
console.log(undefined ?? 6);

console.log(name ?? age ?? address ?? nkName);
