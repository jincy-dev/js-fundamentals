const arr = ["A", "B", "A", "B", "D", "E", "E", "C"];

const arrObj = [
  { name: "Abhiram", mark: 99 },
  { name: "jincy", mark: 100 },
  { name: "Dev", mark: 41 },
  { name: "Abhiram", mark: 100 },
  { name: "Jino", mark: 46 },
  { name: "Dev", mark: 80 },
];

const nameDuplicate = arrObj.reduce((prevValue, currentValue) => {
  //   if (prevValue.name === currentValue.name) {
  //     prevValue.push(currentValue);
  //
  if (prevValue.indexOf(currentValue.name) === -1) {
    // if (!prevValue.name === currentValue.name){
    prevValue.push(currentValue);
  }
  return prevValue;
}, []);
console.log(nameDuplicate);

// ["A","B","C","D","E"]

const repeate = arr.reduce((prevValue, currentValue) => {
  if (prevValue[currentValue]) {
    prevValue[currentValue] += 1;
  } else {
    prevValue[currentValue] = 1;
  }
  return prevValue;
}, {});

const duplicate = arr.reduce((prevValue, currentValue) => {
  if (prevValue.indexOf(currentValue) === -1) {
    prevValue.push(currentValue);
  }
  return prevValue;
}, []);

console.log(repeate);
console.log(duplicate);
