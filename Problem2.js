//Project Euler - Problem 2 - Even Fibonacci Numbers
function fiboEvenSum(number) {
  const fibArr = [1,1];
  for(let i = 1; i <= number; i++){
    fibArr.push(fibArr[i]+fibArr[i-1])
  }
  return fibArr.filter((a) => a%2 ==0).reduce((a,b) => a + b);
}

fiboEvenSum(10);
