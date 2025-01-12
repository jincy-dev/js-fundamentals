function myFun() {
  console.log("hello");
}
myFun();
myFun();

function fun1(name, age) {
  console.log("My name is", name + "and I'm", age + "years old");
}
fun1("jincy", "23");
fun1("jino", "20");

function add(a, b) {
  return a + b;
}
let result = add(2, 3);
console.log(result);

function checkAge(age) {
  if (age >= 18) {
    console.log("access granted");
  } else {
    console.log("access deneid");
  }
}

checkAge(20);

function doNothing() {
  /* empty */
}

console.log(doNothing() === undefined);

/*
??
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR || */

function checkAge(age) {
  return age > 18 || console.log("Did parents allow you?");
  // return (age > 18) ? true : console.log('Did parents allow you?');
}
checkAge(10);

/*
??
Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
 */

function min(val1, val2) {
  if (val1 < val2) {
    return val1;
  } else {
    return val2;
  }
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

function mini(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
console.log(mini(2, 5));
console.log(mini(3, -1));
console.log(mini(1, 1));

/*
??
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
 */
function pow(a, b) {
  return a ** b;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
