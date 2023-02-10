import { Point } from "./Point.mjs";
import _  from "lodash"

export class Board {
  width;
  height;
  grid;
  fallingPosition;
  fallingItem;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = [];

    for (let i = 0; i < height; i++ ) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push('.');
      }
      this.grid.push(row);
    }

  }


  toString() {
    const grid = _.cloneDeep(this.grid)
    
    if (this.hasFalling()){
      this.drawOnGrid(grid)
    }

    let ans = ''
    grid.forEach(row => {
      row.forEach(point => {
        ans += point;
      })
      ans += '\n'
    })
    return ans;
  }

  drop(item) {
    if (this.hasFalling()) {
      throw ('already falling')
    }

    this.fallingItem = item;
    const itemWidth = item.getWidth();
    
    const startI = 0;
    const startJ = Math.floor((this.width - itemWidth) / 2);
    this.fallingPosition = new Point(startI, startJ) 
  }
    

  hasFalling() {
    return this.fallingPosition !== undefined;
  }

  tick() {
    if (!this.hasFalling()) {
      return;
    }

    if (!this.canFall()) {
      this.drawShape()
      this.fallingPosition = undefined;
      return;
    } 
    
    this.moveDown()
  }

  canFall() {
    const { x, y } = this.fallingPosition.getXY();
    this.fallingPosition = new Point(x + 1, y);
    const ans = this.isValid();
    this.fallingPosition = new Point(x, y);
    return ans;
  }

  isValid() {
    const { x, y } = this.fallingPosition.getXY();
    const width = this.fallingItem.getWidth()

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        const point = this.fallingItem.getGrid()[i][j];
        if (point !== '.') {
          const xPos = i + x;
          const yPos = j + y;
          if (this.isPointOutOfBounds(xPos, yPos)) {
            return false;
          }
          if (this.grid[xPos][yPos] !== '.') {
            return false;
          }
        }
      }
    }

    return true;

  }

  isPointOutOfBounds(x, y) {
    if (x < 0) return true;
    if (y < 0) return true;
    if (x >= this.height) return true
    if (y >= this.width) return true;
    return false;
  }

  isFallingItemOutOfBounds() {
    const width = this.fallingItem.getWidth();
    const { x, y } = this.fallingPosition.getXY();
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        const point = this.fallingItem.getGrid()[i][j];
        if (point !== '.') {
          if (this.isPointOutOfBounds(x+i, y+j)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  drawShape() {
    this.drawOnGrid(this.grid)
  }

  drawOnGrid(grid) {
    const startI = this.fallingPosition.getX();
    const startJ = this.fallingPosition.getY();

    const itemGrid = this.fallingItem.getGrid();
    const itemWidth = this.fallingItem.getWidth();

    for (let i = itemWidth - 1; i >= 0 ; i--) {
      for (let j = itemWidth - 1; j >= 0; j--) {
        if (i + startI < this.height) {
          if (itemGrid[i][j] !== '.') {
            grid[i + startI][j + startJ] = itemGrid[i][j]
            if (i + startI > 0) {
              grid[i + startI - 1][j + startJ] = '.'
            }
          }
        }
      }
    }
  }


  moveLeft() {
    const { x, y } = this.fallingPosition.getXY();
    this.fallingPosition = new Point(x, y - 1);
    if (!this.isValid()) {
      this.fallingPosition = new Point(x, y);
    } 
  }

  moveRight() {
    const { x, y } = this.fallingPosition.getXY();
    this.fallingPosition = new Point(x, y + 1);
    if (!this.isValid()) {
      this.fallingPosition = new Point(x, y);
    } 
  }

  moveDown() {
    const { x, y } = this.fallingPosition.getXY();
    this.fallingPosition = new Point(x + 1, y);
    if (!this.isValid()) {
      this.fallingPosition = new Point(x, y);
    }  
  }
  
  rotateLeft() {
    if (!this.hasFalling()) {
      return;
    }

    this.fallingItem = this.fallingItem.rotateLeft();
    this.wallKickIfNecessary();

    if (!this.isValid()) {
      this.fallingItem = this.fallingItem.rotateRight();
    }
  }

  rotateRight() {
    if (!this.hasFalling()) {
      return;
    }
    this.fallingItem = this.fallingItem.rotateRight();
    this.wallKickIfNecessary();
    
    if (!this.isValid()) {
      this.fallingItem = this.fallingItem.rotateLeft();
    }
  }

  wallKickIfNecessary() {
    if (this.isFallingItemOutOfBounds()) {
      this.moveLeft();
      if (!this.isValid()) {
        this.moveRight();
      }
    }
  }

  setBoard(board) {
    this.grid = [];
    let row = [];

    for (const char of board) {
      if (char === '\n') {
        this.grid.push(row);
        row = [];
      } else if (char === ' ') {
        // do nothing
      }
        else {
        row.push(char);
      }
    }
    this.grid.push(row)
  }

  clear() {
    for (let i = this.height - 1; i >= 0; i--) {
      const row = this.grid[i];
      if (isComplete(row)) {
        this.clearRow(i);
        i += 1;
      }

    }
  }

  clearRow(rowIndex) {
    setRowCleared(this.grid[rowIndex])
    for (let i = rowIndex; i > 0; i--) {
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j] = this.grid[i - 1][j];
      }
    }
  }
}

function isComplete(row) {
  return row.every(point => point !== '.');
}

function setRowCleared(row) {
  for (let i = 0; i < row.length; i++) {
    row[i] = '.'
  }
}