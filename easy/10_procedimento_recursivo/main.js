function factorial(number) {
  return number < 0
    ? -1
    : number === 0
    ? 1
    : BigInt(number) * BigInt(factorial(number - 1));
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(32));
console.log(factorial(9));
console.log(factorial(-10));
