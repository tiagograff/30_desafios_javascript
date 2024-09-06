function checkIdentificationCode(code) {
  const codeSplit = code.toString().split("").map(Number); //transforma em number
  let currentValuePair = 0;
  let currentValueOdd = 0;
  let currentValue = 0;
  for (let i = 0; i < codeSplit.length; i += 2) {
    currentValuePair += codeSplit[i];
  }
  currentValuePair *= 3;

  for (let i = 1; i < codeSplit.length; i += 2) {
    currentValueOdd += codeSplit[i];
  }

  currentValue = currentValuePair + currentValueOdd;

  currentValue %= 10;

  return currentValue === 0 ? true : false;
}

console.log(checkIdentificationCode(547020743789));
console.log(checkIdentificationCode(301354030348));
console.log(checkIdentificationCode(301354030349));
console.log(checkIdentificationCode(123456789872));
