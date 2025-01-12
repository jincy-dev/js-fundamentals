/**
 * [{name:"abhi",mark:10},{name:"ram",mark:26},{name:"joe",mark:12},{name:"ram",mark:10},{name:"abhi",mark:30}]
 */

const arr = [
  { name: "abhi", mark: 10 },
  { name: "ram", mark: 26 },
  { name: "joe", mark: 12 },
  { name: "ram", mark: 10 },
  { name: "abhi", mark: 30 },
];
const newArr = arr.map((item) => {
  return item.name;
});
console.log(newArr);

const result = newArr.reduce((duplicate, item) => {
  if (item.name === newArr) {
    duplicate.push(item);
  }
  return duplicate;
}, []);
console.log(result);
