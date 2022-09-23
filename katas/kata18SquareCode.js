const squareCode = function (message) {
  let result = "";
  let text = "";
  let textArr = [];
  message = message.replace(/ /g, "");

  for (let i = 0; i < message.length; i++) {
    if (text.length === Math.ceil(Math.sqrt(message.length))) {
      textArr.push(text);
      text = "";
    }
    text += message[i];
  }
  textArr.push(text);

  for (let i = 0; i < textArr[0].length; i++) {
    for (let x = 0; x < textArr.length; x++) {
      if (textArr[x].length > i) {
        result += textArr[x][i];
      }
    }
    result += " ";
  }

  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
