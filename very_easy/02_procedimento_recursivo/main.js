const chunk = (numbers) => {
  return "chunk-".repeat(numbers).slice(0, -1);
};

console.log(chunk(5));

//

const recursiveChunk = (number) => {
  if (number === 0) return "";
  return number === 1 ? "chunk" : "chunk-" + recursiveChunk(number - 1);
};

console.log(recursiveChunk(5));
