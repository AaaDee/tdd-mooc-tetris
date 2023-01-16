export class RotatingShape {
  width;
  grid;
  

  constructor(form) {
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
    let updatedGrid = [];
    for (let i = 0; i < this.width; i++) {
      updatedGrid.push(Array(this.width));
    }
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        updatedGrid[j][this.width-1-i] = this.grid[i][j];
      }
    }

    let ans = ''
    updatedGrid.forEach(row => {
      row.forEach(point => {
        ans += point;
      })
      ans += '\n'
    })

    ans = ans.substring(0, ans.length - 1);
    return new RotatingShape(ans);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }
}
