let sentance = function () {
  console.log("Hi");
};
sentance();

function heyMsg() {
  console.log("Hey guys");
}
console.log(heyMsg);

let sayHi = function () {
  console.log("Hello");
};

let func = sayHi;
sayHi();
func();

let ans = "yes";
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function yesQtn() {
//   console.log("You selected yes");
// }

// function noQtn() {
//   console.log("You selected no");
// }
// confirmation(yesQtn, noQtn);

age = 8;
if (age >= 18) {
  function age() {
    console.log("your permission is granted");
  }
} else {
  function age() {
    console.log("you don't have permission");
  }
}
age();
