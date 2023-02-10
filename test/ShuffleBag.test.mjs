
import { expect } from "chai";
import { ShuffleBag } from "../src/ShuffleBag.mjs";
import { TetrominoNames, getTetrominoFromName } from "../src/Tetromino.mjs";

describe("Shuffle bag", () => {
  let shuffleBag;
  beforeEach(() => {
    shuffleBag = new ShuffleBag();
  });
  
  it("returns a tetromino name", () => {
    const name = shuffleBag.draw();
    expect(TetrominoNames).to.contain(name);
  });

  it("returns two different tetrominoes at start", () => {
    const name1 = shuffleBag.draw();
    const name2 = shuffleBag.draw();
    expect(name1).not.to.equal(name2);
  });

  it("returns names in random order", () => {
    const name1 = shuffleBag.draw();
    let allSame = true;
    for (let i = 0; i < 100; i++) {
      shuffleBag = new ShuffleBag();
      const name2 = shuffleBag.draw();
      if (name1 !== name2) {
        allSame = false;
        break;
      }
    }
    expect(allSame).to.equal(false);
  });

  it("resets when empty", () => {
    for (let i = 0; i < 100; i++) {
      shuffleBag.draw();
    }
    const name = shuffleBag.draw()
    expect(TetrominoNames).to.contain(name);
  });
});

describe("Mapping from names to tetrominoes", () => {
  let shuffleBag;
  beforeEach(() => {
    shuffleBag = new ShuffleBag(true);
  });
  
  it("draws can be mapped to tetrominoes", () => {
    const name = shuffleBag.draw();
    const tetromino = getTetrominoFromName(name);

    expect(tetromino.toString()).to.exist;
    expect(tetromino.getGrid()).to.exist;
  });

});

