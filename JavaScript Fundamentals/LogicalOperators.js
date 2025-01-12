a = 1;
b = 0;
console.log(a || b);
console.log(a && b);
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(false || true);

console.log(true && false);
console.log(true && true);
console.log(false && false);
console.log(false && true);

let hour = 12;
if (hour < 10 || hour > 18) {
  console.log("store is closed");
} else {
  console.log("Opened");
}

true || console.log("not printed");
false || console.log("printed");

/*
??What is the code below going to output?

alert( null || 2 || undefined );


ans: 2*/

/*

What will the code below output?

alert( alert(1) || 2 || alert(3) );

ans:  1 ,2*/
/*
What is this code going to show?

alert( 1 && null && 2 );

ans: null*/
/*What will this code show?

alert( alert(1) && alert(2) );

ans: 1, undefined*/

/*

?

Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/

// let user = prompt("who is this");
let user = "qwerty";
if ((user = "Admin")) {
  //   let pass = prompt("enter password");
  let pass = "Hello";

  pass === "TheMaster" ? console.log("Welcome") : console.log("wrong password");
} else if (user === " " || null) {
  console.log("Cancelled");
} else {
  console.log("I don't know you");
}
