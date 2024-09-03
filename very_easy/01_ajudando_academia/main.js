function arithmetic_average(...args) {
  let currentValue = 0;
  for (var i = 0; i < args.length; i++) {
    currentValue += args[i];
  }
  const result = currentValue / args.length;
  return result;
}

console.log(
  `a média artmética é de = ${arithmetic_average(10, 9, 6, 8, 9, 1, 5, 7)}`
);
