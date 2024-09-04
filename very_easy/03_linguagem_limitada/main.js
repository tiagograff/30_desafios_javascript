function reverse(...args) {
  let result = [];
  for (let i = args[args.length - 1]; i >= 0; i--) {
    result.push(args[i]);
  }
  return result;
}

console.log(reverse(0, 9, 6, 8, 9, 1, 5, 7));
