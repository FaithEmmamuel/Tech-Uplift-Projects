'use strict!'

function isPrime(num) {
   if (num <= 1)
   return false;

   for (let i = 2; i < num; i++) {
      if (num % i === 0)
      return false;
   }

   return true;
}

let prime = 13;
console.log(isPrime(prime));
