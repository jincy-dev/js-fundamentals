const user = {
  name: "Abhiram",
  age: 25,
  greetings() {
    console.log("greetings");
  },
  greetings1: function () {
    console.log("greetings");
  },
};

user.sayHi = function () {
  console.log("Hi ");
};

user.sayHi();

function sayHello() {
  console.log("hello");
}

user.sayHello = sayHello;

console.log(user);

const car = {
  name: "car",
  model: "modal123w",
  carLock() {
    console.log("Locked");
  },
  carUnlock: function () {
    console.log("Car Unlocked");
  },
  carUnlock2: () => {
    console.log("unlok");
  },
};
function soundHorn() {
  console.log("pom pom");
}
const soundHorn2 = () => {
  console.log("Soundhorn2");
};
car.soundHorn = soundHorn();
car.openHood = function () {
  console.log("Hood opened");
};
