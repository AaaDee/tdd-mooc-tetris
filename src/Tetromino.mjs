import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static I_SHAPE = new RotatingShape(
    [
     `....
      IIII
      ....
      ....`,
     `..I.
      ..I.
      ..I.
      ..I.`,]
  );


  static T_SHAPE = new RotatingShape(
   [
    `....
     TTT.
     .T..
     ....`,
    `.T..
     TT..
     .T..
     ....`,
    `.T..
     TTT.
     ....
     ....`,
    `.T..
     .TT.
     .T..
     ....`,
   ]
  );


  static L_SHAPE = new RotatingShape(
    [
     `....
      LLL.
      L...
      ....`,
     `LL..
      .L..
      .L..
      ....`,
     `..L.
      LLL.
      ....
      ....`,
     `L...
      L...
      LL..
      ....`,
   ]
  );

  static J_SHAPE = new RotatingShape(
    [
     `....
      JJJ.
      ..J.
      ....`,
     `.J..
      .J..
      JJ..
      ....`,
     `J...
      JJJ.
      ....
      ....`,
     `.J..
      .J..
      JJ..
      ....`,
   ]
  );
  static S_SHAPE = new RotatingShape(
    [
     `....
      .SS.
      SS..
      ....`,
     `S...
      SS..
      .S..
      ....`,
   ]
  );

  static Z_SHAPE = new RotatingShape(
    [
     `....
      ZZ..
      .ZZ.
      ....`,
     `.Z..
      ZZ..
      Z...
      ....`,
   ]
  );

  static O_SHAPE = new RotatingShape(
    [
     `....
      .OO.
      .OO.
      ....`,
   ]
  );
}

export const TetrominoNames = ['I', 'O', 'J', 'L', 'S', 'Z', 'T'];

export function getTetrominoFromName(name) {
  const mappings = {
    I: Tetromino.I_SHAPE,
    O: Tetromino.O_SHAPE,
    L: Tetromino.L_SHAPE,
    J: Tetromino.J_SHAPE,
    S: Tetromino.S_SHAPE,
    Z: Tetromino.Z_SHAPE,
    T: Tetromino.T_SHAPE 
  }
  return mappings[name]
}
