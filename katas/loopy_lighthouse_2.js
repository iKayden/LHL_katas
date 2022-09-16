const loopyLighthouse = (range, multiples, words) => {
  const print = console.log;
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      print(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      print(words[0]);
    } else if (i % multiples[1] === 0) {
      print(words[1]);
    } else {
      print(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
