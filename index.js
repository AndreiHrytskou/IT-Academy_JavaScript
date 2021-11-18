const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
const newArr = arr.flat(Infinity);
const reducer = (a, b) => {
  return a + b;
};
console.log(newArr.reduce(reducer));
