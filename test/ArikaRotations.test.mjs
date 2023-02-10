
import { expect } from "chai";
import {  Tetromino } from "../src/Tetromino.mjs";

describe("The I shape", () => {
  const shape = Tetromino.I_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
       IIII
       ....
       ....`
    );
  });

  it("right rotation", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `..I.
       ..I.
       ..I.
       ..I.`
    );
  });
});

describe("The T shape", () => {
  const shape = Tetromino.T_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
       TTT.
       .T..
       ....`
    );
  });

  it("right rotation", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `.T..
       TT..
       .T..
       ....`
    );
  });

  it("double rotation", () => {
    expect(shape.rotateRight().rotateRight().toString()).to.equalShape(
      `.T..
       TTT.
       ....
       ....`
    );
  });

  it("left rotation", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `.T..
       .TT.
       .T..
       ....`
    );
  });
});

describe("The L shape", () => {
  const shape = Tetromino.L_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
      LLL.
      L...
      ....`
    );
  });

  it("right rotation", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `LL..
      .L..
      .L..
      ....`
    );
  });

  it("double rotation", () => {
    expect(shape.rotateRight().rotateRight().toString()).to.equalShape(
      `..L.
      LLL.
      ....
      ....`
    );
  });

  it("left rotation", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `L...
      L...
      LL..
      ....`
    );
  });
});


describe("The J shape", () => {
  const shape = Tetromino.J_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
      JJJ.
      ..J.
      ....`
    );
  });

  it("right rotation", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `.J..
      .J..
      JJ..
      ....`
    );
  });

  it("double rotation", () => {
    expect(shape.rotateRight().rotateRight().toString()).to.equalShape(
      `J...
      JJJ.
      ....
      ....`
    );
  });

  it("left rotation", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `.J..
      .J..
      JJ..
      ....`
    );
  });
});

describe("The S shape", () => {
  const shape = Tetromino.S_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
      .SS.
      SS..
      ....`
    );
  });

  it("right rotation", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
     `S...
      SS..
      .S..
      ....`,
    );
  });
});


describe("The Z shape", () => {
  const shape = Tetromino.Z_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
      ZZ..
      .ZZ.
      ....`
    );
  });

  it("right rotation", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `.Z..
      ZZ..
      Z...
      ....`,
    );
  });
});

describe("The O shape", () => {
  const shape = Tetromino.O_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
      .OO.
      .OO.
      ....`
    );
  });
});


