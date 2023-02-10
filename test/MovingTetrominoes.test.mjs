
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { TestTetromino } from "../src/TestTetromino.mjs";
import { fallToBottom } from "./utils.mjs";

describe("Moving a just dropped tetromino", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
    board.drop(TestTetromino.T_SHAPE);
  });

  it("Can be moved left", () => {
    board.moveLeft()
    expect(board.toString()).to.equalShape(
      `...T......
       ..TTT.....
       ..........
       ..........
       ..........
       ..........`
    );
  });

  it("Can be moved right", () => {
    board.moveRight()
    expect(board.toString()).to.equalShape(
      `.....T....
       ....TTT...
       ..........
       ..........
       ..........
       ..........`
    );
  });

  it("Can be moved down", () => {
    board.moveDown()
    expect(board.toString()).to.equalShape(
      `..........
       ....T.....
       ...TTT....
       ..........
       ..........
       ..........`
    );
  });
});

describe("Moving beyond boundaries", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
    board.drop(TestTetromino.T_SHAPE);
  });

  it("Cannot move beyond left boundary", () => {
    for (let i = 0; i < 5; i++) {
      board.moveLeft();
    }
    expect(board.toString()).to.equalShape(
      `.T........
       TTT.......
       ..........
       ..........
       ..........
       ..........`
    );
  });

  it("Cannot move beyond right boundary", () => {
    for (let i = 0; i < 5; i++) {
      board.moveRight();
    }
    expect(board.toString()).to.equalShape(
      `........T.
       .......TTT
       ..........
       ..........
       ..........
       ..........`
    );
  });

  it("Cannot move beyond bottom", () => {
    for (let i = 0; i < 5; i++) {
      board.moveDown();
    }
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       ...TTT....`
    );
  });
});

describe("Moving across another block", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
    board.drop(TestTetromino.T_SHAPE);
    fallToBottom(board)
    board.drop(TestTetromino.T_SHAPE);
  });

  it("Cannot move left through another block", () => {
    board.moveRight();
    board.moveRight();

    for (let i = 0; i < 3; i++) {
      board.moveDown();
    }

    board.moveLeft()
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ......T...
       ....TTTT..
       ...TTT....`
    );
  });

  it("Cannot move right through another block", () => {
    board.moveLeft();
    board.moveLeft();

    for (let i = 0; i < 3; i++) {
      board.moveDown();
    }

    board.moveRight()
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..T.......
       .TTTT.....
       ...TTT....`
    );
  });

  it("Cannot move down through another block", () => {
    for (let i = 0; i < 5; i++) {
      board.moveDown();
    }

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ....T.....
       ...TTT....
       ....T.....
       ...TTT....`
    );
  });
  
});





