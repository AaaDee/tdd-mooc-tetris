import { Point } from "./Point.mjs";

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
    let ans = ''
    this.grid.forEach(row => {
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
    
    this.drawShape()
  }
    

  hasFalling() {
    return this.fallingPosition !== undefined;
  }

  tick() {
    if (!this.hasFalling()) {
      return;
    }

    if (!this.canFall()) {
      this.fallingPosition = undefined;
      return;
    } 
  
    const startI = this.fallingPosition.getX();
    const startJ = this.fallingPosition.getY();
    this.fallingPosition = new Point(startI + 1, startJ)  

    this.drawShape()

  }

  canFall() {
    const startX = this.fallingPosition.getX();
    const startY = this.fallingPosition.getY();
    const width = this.fallingItem.getWidth()

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < width; j++) {
        const point = this.fallingItem.getGrid()[i][j];

        if (point !== '.') {
          if (this.isAtBottom(startX +1)) {
            return false;
          }

          if (this.shouldHaveEmptyBelow(i, j)) {
            if (!this.hasEmptyBelow(i + startX, j + startY)) {
              return false;
            }
          }
        }
      }
    }

    return true;
  }

  drawShape() {
    const startI = this.fallingPosition.getX();
    const startJ = this.fallingPosition.getY();

    const shapeGrid = this.fallingItem.getGrid();
    const itemWidth = this.fallingItem.getWidth();

    for (let i = itemWidth - 1; i >= 0 ; i--) {
      for (let j = itemWidth - 1; j >= 0; j--) {
        if (i + startI < this.height) {
          if (shapeGrid[i][j] !== '.') {
            this.grid[i + startI][j + startJ] = shapeGrid[i][j]
            if (i + startI > 0) {
              this.grid[i + startI - 1][j + startJ] = '.'
            }
          }
        }
      }
    }
  }

  isAtBottom(x) {
    return x === this.height - 1;
  }

  shouldHaveEmptyBelow(i, j) {
    if (i === this.fallingItem.getWidth() - 1) return true;
    if (this.fallingItem.getGrid()[i+1][j] === '.') return true;
    return false;
  }

  hasEmptyBelow(x, y) {
    return this.grid[x + 1][y] === '.'
  }
}