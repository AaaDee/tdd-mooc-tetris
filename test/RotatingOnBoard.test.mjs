
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { TestTetromino } from "../src/TestTetromino.mjs";
import { fallToBottom } from "./utils.mjs"

describe("Rotating", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
    board.drop(TestTetromino.T_SHAPE);
  });

  it("Can be rotated left", () => {
    board.rotateLeft()
    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT.....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  it("Can be rotated right", () => {
    board.rotateRight()
    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });
});

describe("Rotating  on empty board", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("Rotating left without piece does nothing", () => {
    board.rotateLeft()
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  });

  it("Rotating right without piece does nothing", () => {
    board.rotateRight()
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  });
});


describe("Rotating when blocked", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
    board.drop(TestTetromino.T_SHAPE);
    fallToBottom(board)
    board.drop(TestTetromino.T_SHAPE);
    board.moveDown();
    board.moveDown();
  });

  it("Rotating left does nothing", () => {
    board.rotateLeft()
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ....T.....
       ...TTT....
       ....T.....
       ...TTT....`
    );
  });

  it("Rotating right does nothing", () => {
    board.rotateRight()
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


describe("Wall kick", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("kicked from left wall on left rotation", () => {
    board.drop(TestTetromino.T_SHAPE);
    board.rotateRight()
    for (let i = 0; i < 5; i++) {
      board.moveLeft()
    }
    board.rotateLeft()
    expect(board.toString()).to.equalShape(
     `.T........
      TTT.......
      ..........
      ..........
      ..........
      ..........`
    );
  });

  it("kicked from right wall on right rotation", () => {
    board.drop(TestTetromino.T_SHAPE);
    board.rotateLeft()
    for (let i = 0; i < 5; i++) {
      board.moveRight()
    }
    board.rotateRight()
    expect(board.toString()).to.equalShape(
     `........T.
      .......TTT
      ..........
      ..........
      ..........
      ..........`
    );
  });

  it("kicked from left wall on right rotation", () => {
    board.drop(TestTetromino.I_SHAPE);
    board.rotateRight()
    for (let i = 0; i < 3; i++) {
      board.moveLeft()
    }
    board.rotateRight()
    expect(board.toString()).to.equalShape(
     `..........
      ..........
      IIII......
      ..........
      ..........
      ..........`
    );
  });

  it("kicked from right wall on left rotation", () => {
    board.drop(TestTetromino.I_SHAPE);
    board.rotateLeft()
    for (let i = 0; i < 5; i++) {
      board.moveRight()
    }
    board.rotateLeft()
    expect(board.toString()).to.equalShape(
     `..........
      ..........
      ......IIII
      ..........
      ..........
      ..........`
    );
  });
});






