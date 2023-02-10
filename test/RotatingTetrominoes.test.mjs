
import { expect } from "chai";
import { TestTetromino } from "../src/TestTetromino.mjs";
import { distinctOrientations } from "./utils.mjs";

describe("The T test shape", () => {
  const shape = TestTetromino.T_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `.T.
       TTT
       ...`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `.T.
       .TT
       .T.`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `.T.
       TT.
       .T.`
    );
  });

  it("has 4 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(4);
  });
});



describe("The I test shape", () => {
  const shape = TestTetromino.I_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `.....
       .....
       IIII.
       .....
       .....`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );
  });

  it("has 2 distinct orientations", () => {
    console.log(distinctOrientations(shape))
    expect(distinctOrientations(shape).size).to.equal(2);
  });
});



describe("The O test shape", () => {
  const shape = TestTetromino.O_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `.OO
       .OO
       ...`
    );
  });

  it("cannot be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `.OO
       .OO
       ...`
    );
  });

  it("cannot be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `.OO
       .OO
       ...`
    );
  });

  it("has 1 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(1);
  });
});

describe("The T test shape", () => {
  const shape = TestTetromino.T_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `.T.
       TTT
       ...`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `.T.
       .TT
       .T.`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `.T.
       TT.
       .T.`
    );
  });

  it("has 4 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(4);
  });
});

describe("Rotating full circle", () => {
  it("can be rotated full circle left", () => {
    let shape = TestTetromino.T_SHAPE;
    for (let i = 0; i < 4; i++) {
      shape = shape.rotateLeft()
    }
    expect(shape.toString()).to.equalShape(
      `.T.
       TTT
       ...`
    );
  });

  it("can be rotated full circle right", () => {
    let shape = TestTetromino.T_SHAPE;
    for (let i = 0; i < 4; i++) {
      shape = shape.rotateRight()
    }
    expect(shape.toString()).to.equalShape(
      `.T.
       TTT
       ...`
    );
  });
});


