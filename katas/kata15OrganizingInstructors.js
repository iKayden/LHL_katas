const organizeInstructors = function (instructors) {
  const orgList = {};
  for (instructor of instructors) {
    const name = instructor.name;
    const course = instructor.course;

    orgList[course] ? orgList[course].push(name) : (orgList[course] = [name]);
  }
  return orgList;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
