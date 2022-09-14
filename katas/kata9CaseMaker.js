const camelCase = function (input) {
  return input
    .split(" ")
    .map((word, i) => {
      if (i === 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
