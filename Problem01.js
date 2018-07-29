//Project Euler - Problem 1 - Multiples of 3 and 5 

function multiplesOf3and5(number) {
  let arr = [...Array(number).keys()];
  return arr.filter((a) => a%3 == 0 || a%5 == 0).reduce((a,b) => a + b);
  
  multiplesOf3and5(1000);
