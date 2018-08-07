//Project Euler - Problem 7 - 10001st prime

function nthPrime(number){
	const maxPrimeNum = Math.pow(number,2);
	const primes = [];
	let arr = Array.from(new Array(maxPrimeNum), (val) => 1);
	arr[0] = 0;
  arr[1] = 0;
  for(let i = 2; i<= Math.floor(Math.sqrt(maxPrimeNum)); i++){
  	if(arr[i] == 1){
    	for(let j = i*i; j < maxPrimeNum; j+=i){
      	arr[j] = 0;
      }
    }
  }
 	for(let k = 0; k < arr.length; k++){
  	if(arr[k] == 1){
    	primes.push(k);
    }
  }
  console.log(number-1 + " " + primes[number - 1]);
  return primes[number - 1];
}

nthPrime(10001);
