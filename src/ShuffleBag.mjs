import { TetrominoNames } from "./Tetromino.mjs";
import _ from "lodash";

export class ShuffleBag {
  bag;
  constructor() {
    this.bag = _.shuffle(TetrominoNames);
  }

  draw() {
    if (this.bag.length === 0) {
      this.bag = _.shuffle(TetrominoNames);
    }

    const [name, ...rest] = this.bag;
    this.bag = rest;
    return(name);
  }
}