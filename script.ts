class Point {x: number; y: number;}
let point: Point = new Point();
point.x = 1; 
class Rect {private x1: number;
            public x2: number; 
            y1: number; 
            y2: number;
            private readonly MAX_COORD = 1000;
            square () {
              return Math.abs(this.x1 - this.x2)*
              Math.abs(this.y1 - this.y2)
              }
    constructor(x: number, y: number){
    this.x1
    this.x1 = x
  
    } 
}
let rect1:Rect = new Rect(10,20);

// rect1.x1 = 5
rect1.x2 = 5

console.log(rect1.square())