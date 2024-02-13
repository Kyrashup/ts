// class Point {x: number; y: number;}
// let point: Point = new Point();
// point.x = 1; 
// class Rect {private x1: number;
//             public x2: number; 
//             y1: number; 
//             y2: number;
//             private readonly MAX_COORD = 1000;
//             square () {
//               return Math.abs(this.x1 - this.x2)*
//               Math.abs(this.y1 - this.y2)
//               }
//     constructor(x: number, y: number){
//     this.x1
//     this.x1 = x
  
//     } 
// }
// let rect1:Rect = new Rect(10,20);

// // rect1.x1 = 5
// rect1.x2 = 5

// console.log(rect1.square())


// class Temp{
//   private x: number
//   constructor(val?: number) {
//     val ? this.x = val : this.x = 0
//   }
//   set(val: number){
//     this.x = val
//   }
//   get(){
//     return this.x
//   }
// }
// let temp1: Temp = new Temp()
// temp1.set(100)
// console.log(temp1.get())


/////


// class Temp{
//   public x: number;
//   constructor(val: number = 0) {
//     this.x = val;
//   }
// }

// let temp1: Temp = new Temp();
// temp1.x = 100;
// console.log(temp1.x);



class Point {
  constructor(public x: number = 0, public y: number = 0) {}
}


class Triangle {
  private pointA: Point;
  private pointB: Point;
  private pointC: Point;

  constructor(pointAX:number = 0,
              pointAY:number = 0,
              pointBX:number = 0,
              pointBY:number = 0,
              pointCX:number = 0,
              pointCY:number = 0 )
    {
    this.pointA = new Point(pointAX, pointAY);
    this.pointB = new Point(pointBX, pointBY);
    this.pointC = new Point(pointCX, pointCY);
 }

  printVertices() {
    console.log(`Vertex A: (${this.pointA.x}, ${this.pointA.y})`);
    console.log(`Vertex B: (${this.pointB.x}, ${this.pointB.y})`);
    console.log(`Vertex C: (${this.pointC.x}, ${this.pointC.y})`);
  }
}

let triangle1 = new Triangle();
triangle1.printVertices();

let triangle2 = new Triangle(1, 2, 3, 4, 5, 6);
triangle2.printVertices();