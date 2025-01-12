//While loop
let i = 4;
while (i) {
  console.log(i);
  i--;
}
let j = 3;
while (j < 7) {
  console.log(j);
  j++;
}
//Do while loop
let k = 4;
do {
  console.log("k is printed", k);
  k++;
} while (k < 7);

//FOR LOOP
for (let a = 0; a <= 3; a++) {
  a++;
  console.log("value of a:", a);
}
let ii = 0;

let num = 5;
for (; num < 10; num++) {
  console.log("Number", num);
}
let numb = 7;
for (; numb <= 9; ) {
  numb++;
  console.log("the number", numb);
}
for (ii = 0; ii < 3; ii++) {
  // use an existing variable
  console.log(ii); // 0, 1, 2
}
console.log(ii);
//If
let d = 2;
if (d < 5) {
  console.log("a is greater than 5");
}
//break
for (let y = 1; y <= 4; y++) {
  if (y % 2 == 0) break;
  console.log("y is:", y);
}
//continue
for (let x = 0; x <= 9; x++) {
  if (x % 2 == 0) continue;
  console.log("x is:", x);
}
for (let ab = 0; ab <= 3; ab++) {
  for (let bc = 0; bc <= 3; bc++) {
    console.log(`the coords are:${ab},${bc}`);
  }
}

/*
?
What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
} */

let h = 3;

while (h) {
  console.log(h--);
}
/*
?Use the for loop to output even numbers from 2 to 10.

 */
for (let index = 0; index < 10; index++) {
  if (index % 2 == 0) continue;
  index++;

  console.log(index);
}

/*
?
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
} */
let iii = 0;
while (iii < 3) {
  console.log(`number ${iii}!`);
  i++;
}
