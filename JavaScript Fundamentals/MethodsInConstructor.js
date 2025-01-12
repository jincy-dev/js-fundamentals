function UserName(name) {
  this.name = name;
  this.fun = function () {
    console.log("The name is " + this.name);
  };
}
let john = new UserName("John");
let james = new UserName("Zara");
john.fun();
james.fun();

function PersonalDetails(address) {
  this.address = address;
  this.newFun = function () {
    console.log("The address is " + address);
  };
}
let tharavadu = new PersonalDetails("Marachinivila");
let veedu = new PersonalDetails("Koditharamannadi");
tharavadu.newFun();
veedu.newFun();

/*

??

Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
If it is, then provide an example of their code.
*/

