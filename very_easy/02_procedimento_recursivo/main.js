const chunk = (numbers) => {
  return "chunk-".repeat(numbers).slice(0, -1);
};

console.log(chunk(5));
