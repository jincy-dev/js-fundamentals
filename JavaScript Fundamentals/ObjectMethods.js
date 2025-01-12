let user = {
  name: "Jincy",
  age: 23,
};

user.myFunction = function () {
  console.log("Hello");
};
user.myFunction();

user1 = {
  myNewFunction: function () {
    console.log("Hey");
  },
  myNewFunctiona: () => {},
};
user1.myNewFunction();

user2 = {
  myFunction1() {
    console.log("Hello world!");
  },
};
user2.myFunction1();

let user3 = {
  name: "John",
  printName() {
    console.log(this.name);
  },
};

let user4 = {
  name: "Eddie",
};

function myFunction2() {
  console.log(this.name);
}
myFunction2();
user3.myFunction2 = myFunction2;
user4.myFunction2 = myFunction2;

user4.printName = user3.printName;
user3.myFunction2();
user4.myFunction2();
user4.printName();

let users = { fName: "jeeva", ages: 25 };
let person = { fName: "steve", lName: "Smith" };

function example() {
  console.log(this.fName);
}

users.f = example;
person.f = example;

users.f();
person.f();
users["f"]();

let my = {
  names: "My",
  fullName: "Sinamika",
  newFun() {
    let arrow = () => {
      console.log(this.names);
      console.log(this.fullName);
    };
    arrow();
  },
};
my.newFun();

/*

??

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); 

ans:error*/

function makeUser() {
  return {
    namee: "Jacob",
    ref() {
      return this;
    },
  };
}
let userr = makeUser();

console.log(userr.ref().namee);

/*

??

Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

*/

let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    (this.a = 2), (this.b = 5);
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

/*

??
There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Such an approach is widely used across JavaScript libraries.
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
