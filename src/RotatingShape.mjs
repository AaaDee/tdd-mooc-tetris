export class RotatingShape {
  width;
  grid;
  orientations;
  rotated;
  orientation;
  rotations;
  

  constructor(rotations, orientation = 0, rotated = false) {
    this.grid = [];
    this.orientation = orientation;
    this.rotations = rotations;
    let row = [];
    const form = rotations[orientation];
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
    let newOrientation = this.orientation + 1;
    if (newOrientation === this.rotations.length) {
      newOrientation = 0;
    }
    return new RotatingShape(this.rotations, newOrientation, !this.rotated);
  }

  rotateLeft() {
   let newOrientation = this.orientation - 1;
    if (newOrientation === - 1) {
      newOrientation = this.rotations.length - 1;
    }
    return new RotatingShape(this.rotations, newOrientation, !this.rotated);
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