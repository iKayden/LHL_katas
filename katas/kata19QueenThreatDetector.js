const generateBoard = (whiteQueen, blackQueen) => {
  // 1. Generating an empty chess board
  let chessBoard = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let y = 0; y < 8; y++) {
      row.push(0);
    }
    chessBoard.push(row);
  }
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;

  return chessBoard;
};

const queenThreat = (chessBoard) => {
  let queensPos = [];

  // find the location of queens
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (chessBoard[i][j] === 1) queensPos.push([i, j]);
    }
  }

  // detect weather or not the two queens are positioned so that they attack each other
  if (
    queensPos[0][0] === queensPos[1][0] ||
    queensPos[0][1] === queensPos[1][1]
  ) {
    return true;
  } else if (
    Math.abs(queensPos[0][0] - queensPos[1][0]) ===
    Math.abs(queensPos[0][1] - queensPos[1][1])
  ) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
