function romanNumerals(str) {
  const numeralsArray = str.split("");

  const decimalsArray = numeralsArray.map((decimal) => {
    switch (decimal) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  });

  return decimalsArray.reduce((acc, current, index, array) => {
    return current < array[index + 1] ? acc - current : acc + current;
  }, 0);
}

console.log(romanNumerals("XLVII")); // 47
console.log(romanNumerals("CDXXXVIII")); // 438
console.log(romanNumerals("CMIX")); // 909
console.log(romanNumerals("MMMCMXCIX")); //3999
