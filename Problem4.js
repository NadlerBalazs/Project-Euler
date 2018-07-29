Project Euler  - Problem 4 - Largest palindrome product

function largestPalindromeProduct(digit) {
  let firstMultiple = Math.pow(10, digit)-1;
  let secondMultiple = firstMultiple;
  let palindrome;
  let max;
  const palindromArr = [];
  const downLimit = Math.pow(10, digit-1);
  do{
    if(secondMultiple != downLimit){
      --secondMultiple;
    }else if(secondMultiple == downLimit){
      --firstMultiple;
      secondMultiple = --firstMultiple;
    }
    max = secondMultiple * firstMultiple;
    palindrome = max.toString().split('').reverse().join('');
    if (palindrome == max){
      palindromArr.push(max);
    }
  }while (firstMultiple >= downLimit);
  return Math.max(...palindromArr);
}

largestPalindromeProduct(3);
