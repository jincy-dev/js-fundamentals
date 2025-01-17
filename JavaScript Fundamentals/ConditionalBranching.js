let age = 7;
let message = age === 3 ? "Hey" : "Hoy";
console.log(message);

/*
??
Will alert be shown?

if ("0") {
  alert( 'Hello' );

  ans: yes
} */

/*
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

ans:

let qtn=prompt("what is the official name of javascript","");
let ans=alert((qtn===ECMAScript) ? "Right!" : "You don’t know? ECMAScript!")
?*/

/*
??
Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number. */
console.log(-1 < 0 ? "1" : "-1");
console.log(-1 == 0 ? console.log("0") : "-1");

/*
?Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

let result =
  a + b < 4 ? console.log((result = "Below")) : console.log((result = "Over"));

/*

?Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/

let message =
  login === "Employee"
    ? "Hello"
    : login === "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
