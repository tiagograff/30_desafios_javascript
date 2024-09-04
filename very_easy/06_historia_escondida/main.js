function reverse(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((letter) => letter.split("").reverse().join(""))
    .join(" ");
}

console.log(reverse("Lorem ipsum dolor sit amet, consectetur adipiscing"));
console.log(reverse("This is an apple"));
