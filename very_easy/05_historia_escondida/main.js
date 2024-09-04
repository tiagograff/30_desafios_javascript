function biggestWord(string) {
  return (stringArray = string
    .toLowerCase()
    .split("")
    .sort()
    .splice(-1)
    .toString());
}

console.log(biggestWord("lorem ipsum dolore sec avanti"));
console.log(biggestWord("hello"));
console.log(biggestWord("La"));
