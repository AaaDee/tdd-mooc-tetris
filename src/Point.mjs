export class Point {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() { 
    return this.x;
  }
  
  getY() {
    return this.y;
  }

  getXY() {
    return {
      x: this.x,
      y: this.y 
    }
  }

}