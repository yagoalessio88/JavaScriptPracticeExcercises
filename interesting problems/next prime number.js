function myFunction() {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  let n = a;
  while (!isPrime(n)) n++;
  return n;
}

/////////////////

// function myFunction(a) {
//   const checkPrime = (num) => {
//     if (num < 2) {
//       return false;
//     }
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const nextPrime = (num = 1) => {
//     if (checkPrime(num)) {
//       return num;
//     }
//     while (!checkPrime(++num)) {}
//     return num;
//   };
//   console.log(nextPrime(a));
//   return nextPrime(a);
// }

// myFunction(2000);
