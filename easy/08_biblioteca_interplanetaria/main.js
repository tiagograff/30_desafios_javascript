function nameAbbreviation(name) {
  const nameSplit = name.split(" ");
  const lastName = nameSplit[nameSplit.length - 1].toUpperCase();
  nameSplit.pop();
  const abbreviation = nameSplit
    .map((name) => name.charAt(0).toUpperCase() + ".")
    .join(" ");
  return lastName + " " + abbreviation;
}

console.log(nameAbbreviation("Tiago Pinz Graffunder"));
