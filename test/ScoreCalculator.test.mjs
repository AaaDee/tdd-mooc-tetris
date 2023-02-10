
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { ScoreCalculator } from "../src/ScoreCalculator.mjs";
import { TestTetromino } from "../src/TestTetromino.mjs";
import { fallToBottom } from "./utils.mjs";

describe("Scoring", () => {
  it("starts at zero", () => {
    const sc = new ScoreCalculator();
    expect(sc.getScore()).to.equal(0);
  
  });

  it("updates score when 1 line cleared", () => {
    const sc = new ScoreCalculator();

    sc.update(1, 0);
    expect(sc.getScore()).to.equal(40);
  });

  it("handles scores based on formula", () => {
    const sc = new ScoreCalculator();
    sc.update(2, 1);
    expect(sc.getScore()).to.equal(200);
  });

});

describe("Scoring with board", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("calculates single line clear", () => {
    const sc = new ScoreCalculator();
    board.setScorer(sc);
    board.setBoard(
      `..........
       ..........
       ..........
       ..........
       ..........
       TTTTTTTTTT`
    )
    board.clear()
    expect(sc.getScore()).to.equal(40);
  });

  it("calculates multiple lines", () => {
    const sc = new ScoreCalculator();
    board.setScorer(sc);
    board.setBoard(
      `..........
       ..........
       ..........
       ..........
       TTTTTTTTTT
       TTTTTTTTTT`
    )
    board.clear()
    expect(sc.getScore()).to.equal(100);
  });

  it("calculates correctly at level 1", () => {
    const sc = new ScoreCalculator();
    board.setScorer(sc);
    board.setLevel(1);
    board.setBoard(
      `..........
       ..........
       ..........
       ..........
       ..........
       TTTTTTTTTT`
    )
    board.clear()
    expect(sc.getScore()).to.equal(80);
  });
});



