function name(...args) {
  const arr = [6, 4, 9];
  const newArr = [...[6, 4, 9], ...args];
//   console.log("args", newArr);
}
name(1, 2, 3);

