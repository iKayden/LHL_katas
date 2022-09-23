const repeatNumbers = function (data) {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let stringArr = "";

    for (let y = 0; y < data[i][1]; y++) {
      stringArr += data[i][0];
    }
    result.push(stringArr);
  }
  return result.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
