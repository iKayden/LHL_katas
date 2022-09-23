const instLongestName = function (instructors) {
  let numCharacters = 0;
  let longestName = {};

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > numCharacters) {
      numCharacters = instructors[i].name.length;
      longestName = instructors[i];
    }
  }
  return longestName;
};

console.log(
  instLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
