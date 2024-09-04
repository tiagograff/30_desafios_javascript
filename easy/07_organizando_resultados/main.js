function orderTwoDimensional(array) {
  return array.flat().sort((a, b) => a - b);
}

console.log(
  orderTwoDimensional([
    [1, 5, 3],
    [6, 19, 11],
    [47, 128, 5],
    [1, 93, 57, 42, 103],
  ])
);
