const makeCase = function (input, caseStyle) {
  // It didn't wan't to take the name "case" as a parameter, so I changed it to "caseStyle"
  if (typeof caseStyle !== "object") caseStyle = [caseStyle];

  if (caseStyle.length > 1) {
    const sortArr = [
      "camel",
      "pascal",
      "snake",
      "kebab",
      "title",
      "vowel",
      "consonant",
      "upper",
      "lower",
    ];
    // Compare Function
    caseStyle.sort((a, b) => sortArr.indexOf(a) - sortArr.indexOf(b));
  }

  for (style of caseStyle) {
    switch (style) {
      case "camel":
        input = input
          .replace(/\s\w/g, (char) => char.toUpperCase())
          .replace(/\s/g, "");
        break;
      case "pascal":
        input = input
          .replace(/\b\w/g, (char) => char.toUpperCase())
          .replace(/\s/g, "");
        break;
      case "snake":
        input = input.replace(/\s/g, "_");
        break;
      case "kebab":
        input = input.replace(/\s/g, "-");
        break;
      case "title":
        input = input.replace(/\b\w/g, (char) => char.toUpperCase());
        break;
      case "vowel":
        input = input.replace(/[aeiou]/gi, (char) => char.toUpperCase());
        break;
      case "consonant":
        input = input.replace(/[^aeiou]/gi, (char) => char.toUpperCase());
        break;
      case "upper":
        input = input.toUpperCase();
        break;
      case "lower":
        input = input.toLowerCase();
        break;
    }
  }
  return input;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
