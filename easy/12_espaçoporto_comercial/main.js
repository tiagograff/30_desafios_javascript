function quantityCredits(totalCredits) {
  const creditsList = {
    1: 0,
    5: 0,
    10: 0,
    25: 0,
    100: 0,
    500: 0,
  };

  while (totalCredits !== 0) {
    if (totalCredits >= 500) {
      totalCredits -= 500;
      creditsList[500]++;
    } else if (totalCredits >= 100) {
      totalCredits -= 100;
      creditsList[100]++;
    } else if (totalCredits >= 25) {
      totalCredits -= 25;
      creditsList[25]++;
    } else if (totalCredits >= 10) {
      totalCredits -= 10;
      creditsList[10]++;
    } else if (totalCredits >= 5) {
      totalCredits -= 5;
      creditsList[5]++;
    } else if (totalCredits >= 1) {
      totalCredits -= 1;
      creditsList[1]++;
    } else {
      console.log("invalid total credits");
    }
  }

  return creditsList;
}

console.log(quantityCredits(478));
console.log(quantityCredits(384));
console.log(quantityCredits(5412));
console.log(quantityCredits(50));

// ou conforme a resolução do instrutor

function creditCoins(num) {
  let rest = num;
  const coins = { 500: 0, 100: 0, 25: 0, 10: 0, 5: 0, 1: 0 };

  coins["500"] = Math.floor(rest / 500); // números inteiro - arredonda para baixo
  rest -= 500 * Math.floor(rest / 500);

  coins["100"] = Math.floor(rest / 100);
  rest -= 100 * Math.floor(rest / 100);

  coins["25"] = Math.floor(rest / 25);
  rest -= 25 * Math.floor(rest / 25);

  coins["10"] = Math.floor(rest / 10);
  rest -= 10 * Math.floor(rest / 10);

  coins["5"] = Math.floor(rest / 5);
  rest -= 5 * Math.floor(rest / 5);

  coins["1"] = Math.floor(rest / 1);
  rest -= 1 * Math.floor(rest / 1);

  return coins;
}
