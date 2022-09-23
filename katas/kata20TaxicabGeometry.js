const blocksAway = function (directions) {
  let location = { east: 0, north: 0 };
  let rotation;

  for (let i = 0; i < directions.length; i += 2) {
    if (rotation === undefined) {
      if (directions[i] === "right") rotation = 0;
      else rotation = 90;
    } else if (directions[i] === "right") {
      rotation -= 90;
    } else if (directions[i] === "left") {
      rotation += 90;
    }

    if (rotation < 0) {
      rotation += 360;
    } else if (rotation > 359) {
      rotation -= 360;
    }

    if (rotation === 0) {
      location.east += directions[i + 1];
    } else if (rotation === 90) {
      location.north += directions[i + 1];
    } else if (rotation === 180) {
      location.east -= directions[i + 1];
    } else if (rotation === 270) {
      location.north -= directions[i + 1];
    }
  }
  return location;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
