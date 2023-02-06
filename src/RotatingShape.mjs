export class RotatingShape {
  width;
  grid;
  orientations;
  rotated;
  

  constructor(form, orientations = 4, rotated = false) {
    this.grid = [];
    let row = [];
    for (const char of form) {
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
    this.width = this.grid[0].length;
    this.orientations = orientations;
    this.rotated = rotated;
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

  rotateRight() {
    if (this.orientations === 1) {
      return this;
    }

    if (this.orientations === 2 && this.rotated) {
      return this.rotateLeft();
    }

    let updatedGrid = initializeGrid(this.width);
    
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        updatedGrid[j][this.width-1-i] = this.grid[i][j];
      }
    }

    let ans = getShapeFromGrid(updatedGrid);
    return new RotatingShape(ans, this.orientations, !this.rotated);
  }

  rotateLeft() {
    if (this.orientations === 1) {
      return this;
    }

    if (this.orientations === 2 && !this.rotated) {
      return this.rotateRight();
    }
    
    let updatedGrid = initializeGrid(this.width);

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        updatedGrid[this.width - 1 - j][i] = this.grid[i][j];
      }
    }

    let ans = getShapeFromGrid(updatedGrid);
    return new RotatingShape(ans, this.orientations, !this.rotated);
  }

  getGrid() {
    return this.grid
  }

  getWidth() {
    return this.width
  }
}

function initializeGrid(width) {
  let grid = [];
  for (let i = 0; i < width; i++) {
    grid.push(Array(width));
  }
  return grid;
}

function getShapeFromGrid(grid) {
  let ans = ''
    grid.forEach(row => {
      row.forEach(point => {
        ans += point;
      })
      ans += '\n'
    })

    ans = ans.substring(0, ans.length - 1);
    return ans;
}