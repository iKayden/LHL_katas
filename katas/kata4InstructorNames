const instructorWithLongestName = function(instructors) {
  let length1 = 0;
  let longestName = {};
  const arr = instructors;
  for (let i=0; i<arr.length; i++){
      if (arr[i].name.length > length1){
        length1 = arr[i].name.length;
        longestName = arr[i];
      }
  }
  return longestName;
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
