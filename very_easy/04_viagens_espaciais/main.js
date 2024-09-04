function square(numbers) {
  numbers = numbers.toString();
  let result = [];
  let numbersSplit = numbers.split("");
  numbersSplit.forEach((number) =>
    result.push(parseInt(number) * parseInt(number))
  );
  return result.toString().replace(/[^0-9]/g, "");
}

console.log(square(3514));
console.log(square(925116));
