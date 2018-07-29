//Project Euler - Problem 13 - Large sum

function largeSum(arr) {
  let sum = arr.reduce((a,b)=> Math.round(a) + Math.round(b));
  let res = sum.toString().replace(".", "").substring(0,10);
  return +res;
}

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
