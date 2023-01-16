export class Board {
  width;
  height;
  grid;
  fallingPosition;
  fallingBlock;

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

  drop(block) {
    if (this.hasFalling()) {
      throw ('already falling')
    }

    this.fallingPosition = 0;
    this.fallingBlock = block;
    this.grid[this.fallingPosition][1] = this.fallingBlock.getColor();
  }

  hasFalling() {
    return this.fallingPosition !== undefined;
  }

  tick() {
    if (this.fallingPosition === this.height - 1 ||
        this.grid[this.fallingPosition + 1][1] !== '.'  
    ) {
      this.fallingPosition = undefined;
      return;
    }
    this.grid[this.fallingPosition][1] = '.'
    this.fallingPosition += 1;
    this.grid[this.fallingPosition][1]= this.fallingBlock.getColor();
  }

  
}
