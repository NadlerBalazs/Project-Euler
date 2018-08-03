//Project Euler - Problem 3 - Largest prime factor
//(not an elegant solution)

function largestPrimeFactor(number) {
  const maxPrimeNum = 15000;
  let arr = Array.from(new Array(maxPrimeNum),(val,index)=>index+2);
  let filtered = arr.filter((a) => a%2 != 0 && a%3 != 0 && a%5 != 0 && a%7 != 0);
  let firstPrimes = [2,3,5,7];
  let primeArr = firstPrimes.concat(filtered);
  let i = 0;
  let maxPrime = [];
  while (number != 1){
    if(number % primeArr[i] == 0){
      number /= primeArr[i];
      maxPrime.push(primeArr[i]);
      i = 0;      
    }else{
      i++;
    }
  }
  return Math.max(...maxPrime);
}

largestPrimeFactor(13195);
