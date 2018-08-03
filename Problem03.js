//Project Euler - Problem 3 - Largest prime factor
function largestPrimeFactor(number) {
  const maxPrimeNum = 15000;
  const primes = [];
  let arr = Array.from(new Array(maxPrimeNum),(val)=>1);
  arr[0] = 0;
  arr[1] = 0;
  for(let i = 2; i <= Math.floor(Math.sqrt(maxPrimeNum)); i++){
    if(arr[i] == 1){
      for(let j = i * i; j < maxPrimeNum; j+=i){
            arr[j] = 0;
      }
    }
  }
  for(let k = 0; k < arr.length; k++ ){
    if(arr[k] == 1){
      primes.push(k);  
    }
  }

  let l = 0;
  let maxPrime = [];
  while (number != 1){
    if(number % primes[l] == 0){
      number /= primes[l];
      maxPrime.push(primes[l]);
      l = 0;      
    }else{
      l++;
    }
  }
  return Math.max(...maxPrime);
}
