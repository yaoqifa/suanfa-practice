const primes = []
function getPrimes(n) {
  // base case
  primes.push(2)
  for (let i = 3; i < n; i += 2) {
    const bool = primes.some((item) => i % item === 0)
    // for (let j = 2; j < i; j++) {
    //   if (i % j === 0) {
    //     bool = false
    //     break
    //   }
    // }
    if (!bool) {
      primes.push(i)
    }
  }
}
getPrimes(1000)

console.log(primes)