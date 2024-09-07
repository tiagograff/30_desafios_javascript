function decrypt(str, key) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const text = str.toUpperCase().split("");
  let currentValue = "";

  text.forEach((char) => {
    const index = alphabet.indexOf(char);
    if (index !== -1) {
      let currentIndex = (index - key + alphabet.length) % alphabet.length;
      currentValue += alphabet[currentIndex].toLowerCase();
    } else {
      currentValue += char;
    }
  });
  const firstChar = currentValue.charAt(0).toUpperCase();
  const rest = currentValue.slice(1, currentValue.length);
  return firstChar + rest;
}

console.log(decrypt("Vguvg", 2));
console.log(decrypt("Amozmlw", 8));
