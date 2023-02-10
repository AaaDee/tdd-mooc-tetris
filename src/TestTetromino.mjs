import { RotatingShape } from "./RotatingShape.mjs";

export class TestTetromino {
  static T_SHAPE = new RotatingShape(
   [
    `.T.
     TTT
     ...`,
    `.T.
     .TT
     .T.`,
    `...
     TTT
     .T.`,
    `.T.
     TT.
     .T.`,
  ]
  );

  static I_SHAPE = new RotatingShape(
    [
     `.....
      .....
      IIII.
      .....
      .....`,
     `..I..
      ..I..
      ..I..
      ..I..
      .....`]
  );

  static O_SHAPE = new RotatingShape(
    [
    `.OO
     .OO
     ...`
    ]
  );
}