//Project Euler - Problem 6 - Sum square difference

function sumSquareDifference(number) {
  let arr = Array.from(new Array(number),(val,index)=>index+1);
  let squareSum = Math.pow(arr.reduce((a,b) => a+b), 2);
  let sumSquares = arr.map((a) => a*a).reduce((a,b) => a+b);

  return squareSum - sumSquares;
}

sumSquareDifference(100);
