let a = 2 + 2 + 2;
switch (a) {
  case 2:
    console.log("it's 2");
    break;
  case 4:
    console.log("it's 4");
    break;
  case 6:
  case 7:
    console.log("it's 6");
    break;
  case 8:
    console.log("it's 8");
    break;
  default:
    break;
}

let arg = "this argument";
switch (arg) {
  case 2:
    console.log("it's 2");
    break;
  case 4:
    console.log("it's 4");
    break;
  case 6:
  case 7:
    console.log("it's 6");
    break;
  case 8:
    console.log("it's 8");
    break;
  default:
    break;
}
/*
??
Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */

let browser = "Brave";
if (browser == "Edge") {
  console.log("You've got the Edge!");
} else if ((browser = "Chrome" || "Firefox" || "Safari" || "Opera")) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

/*
??Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
 */

let aa = 2;
switch (aa) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
}
