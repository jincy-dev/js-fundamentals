let arr = (a, b) => a + b;
console.log(arr(1, 2));

let eg = (n) => n * 2;
console.log(eg(7));

let eg1 = () => console.log("Hello world!");
eg1();

let age = 20;
let access = () =>
  age >= 18 ? console.log("access granted") : console.log("no access");
access();

let mark = (sub1, sub2) => {
  let result = sub1 + sub2;
  return result;
};
console.log(mark(30, 20));

/*

??
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/


let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
'Do you agree?',
() => console.log('You agreed'),
() => console.log('You interrupted execution'),
);
