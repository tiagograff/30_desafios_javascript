function betweenCoordinates([x, y]) {
  const newCoordinates = [];
  for (let i = 0; i <= [x]; i++) {
    for (let j = 0; j <= [y]; j++) {
      newCoordinates.push([i, j]);
    }
  }
  return newCoordinates;
}

console.log(betweenCoordinates([1, 3]));
